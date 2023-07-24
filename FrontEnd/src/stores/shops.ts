import { getAllShops, getShopsByLocName } from '@/api/shops'
import type { Shop, ShopList, ShopsMapList } from '@/types/shops'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useShopStore = defineStore('shop-store', () => {
  const pageIdx = ref(0)
  const typeIdx = ref(0)

  const locTypeList: Ref<string[]> = ref([]) // 지역종류
  const numList: Ref<number[]> = ref([]) // pagenate bar
  const maxCnt = 10
  const shopList: Ref<ShopList> = ref([]) // 전체
  const shopMapList: Ref<ShopsMapList> = ref([]) // 지도 정보

  const displayShopList = computed(() => {
    // 보여질 테이블리스트
    return pageIdx.value * maxCnt + maxCnt < shopList.value.length
      ? shopList.value.slice(pageIdx.value * maxCnt, pageIdx.value * maxCnt + maxCnt)
      : shopList.value.slice(pageIdx.value * maxCnt)
  })

  const getPageIdx = () => pageIdx.value
  const getTypeIdx = () => typeIdx.value
  const getLocTypeList = () => locTypeList.value
  const getNumList = () => numList.value
  const getShopList = () => shopList.value
  const getShopMapList = () => shopMapList.value
  const getDisplayShopList = () => displayShopList.value

  const getAllShopList = async () => {
    const data = await getAllShops()
    locTypeList.value = [...new Set(data.map((el: Shop) => el.locName))] as string[]
  }

  const getShopListByLocName = async (locName = '') => {
    const data = await getShopsByLocName(locName)
    shopList.value = data
    shopMapList.value = data.map((el) => {
      return { shopName: el.shopName, shopAddress: el.shopAddress }
    })
    const num = Math.ceil(shopList.value.length / maxCnt)
    numList.value = Array.from({ length: num }, (_, i) => i + 1)
    typeIdx.value = locTypeList.value.indexOf(locName)
    pageIdx.value = 0
  }

  const changePageIdx = (idx: number) => {
    const end = Math.ceil(shopList.value.length / maxCnt)
    if (idx < 0) pageIdx.value = idx + 1
    else if (idx >= 0 && idx < end) pageIdx.value = idx
    else pageIdx.value = idx - 1
  }

  return {
    getPageIdx,
    getTypeIdx,
    getLocTypeList,
    getNumList,
    getShopList,
    getShopMapList,
    getDisplayShopList,

    getAllShopList,
    getShopListByLocName,
    changePageIdx
  }
})
