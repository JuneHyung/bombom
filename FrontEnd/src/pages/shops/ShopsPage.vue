<template>
  <div class="shops-content-wrap">
    <div class="map-wrap-box">
      <KakaoMap :addressList="shopsMapData"></KakaoMap>
    </div>

    <ul class="type-list-wrap-box">
      <template v-for="(typeItem, tIdx) in typeList" :key="tIdx">
        <li class="type-item" :class="{ 'active-item': typeIdx === tIdx }"
          @click="getShopsListByLocName(typeItem)">{{ typeItem }}</li>
      </template>
    </ul>

    <div class="shops-table-wrap-box">
      <table>
        <thead>
          <template v-for="(hLabel, idx) in headLabelList" :key="idx">
            <th>{{ hLabel }}</th>
          </template>
        </thead>
        <tbody v-if="shopsData.length !== 0">
          <template v-for="item in shopsList" :key="item">
            <tr>
              <td>{{ item.locName }}</td>
              <td>{{ item.shopName }}</td>
              <td>{{ item.shopAddress }}</td>
              <td>{{ item.shopTel }}</td>
            </tr>
          </template>
        </tbody>
        <tbody v-else>
          <tr class="no-data-row">
            <td colspan="5">No Data Sorry</td>
          </tr>
        </tbody>
      </table>
      <ul class="pagenate-list">
        <li class="pagenate-item" @click="changePageIdx(pageIdx - 1)">prev</li>
        <template v-for="(num, idx) in numList" :key="idx">
          <li
            class="pagenate-item"
            :class="{ 'active-number': idx === pageIdx }"
            @click="changePageIdx(idx)"
          >
            {{ num }}
          </li>
        </template>
        <li class="pagenate-item" @click="changePageIdx(pageIdx + 1)">next</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, type Ref, ref } from 'vue'
import { getAllShops, getShopsByLocName } from '@/api/shops'
import KakaoMap from '@/components/common/KakaoMap.vue'
import _ from 'lodash'
import type { ShopList, ShopsMapList } from '@/types/shops';
const pageIdx = ref(0) // pag
const typeIdx = ref(0)
const typeList: Ref<string[]> = ref([])
const numList: Ref<number[]> = ref([])
const maxCnt = 10

const shopsData: Ref<ShopList> = ref([])
const shopsMapData: Ref<ShopsMapList> = ref([])

const shopsList = computed(() => {
  return pageIdx.value * maxCnt + maxCnt < shopsData.value.length
    ? shopsData.value.slice(pageIdx.value * maxCnt, pageIdx.value * maxCnt + maxCnt)
    : shopsData.value.slice(pageIdx.value * maxCnt)
})
const headLabelList = ['지역', '매장명', '주소', '전화번호'];

const getAllShopsList = async () => {
  const data = await getAllShops()
  typeList.value = [...new Set(data.map((el) => el.locName))] as string[];
}

const getShopsListByLocName = async (locName = '') => {
  const data = await getShopsByLocName(locName)
  shopsData.value = data
  shopsMapData.value = data.map((el) => {
    return { shopName: el.shopName, shopAddress: el.shopAddress }
  })
  const num = Math.ceil(shopsData.value.length / maxCnt)
  numList.value = Array.from({ length: num }, (_, i) => i + 1)
  typeIdx.value = typeList.value.indexOf(locName);
  pageIdx.value = 0;
}


const changePageIdx = (idx: number) => {
  const end = Math.ceil(shopsData.value.length / maxCnt)
  if (idx < 0) pageIdx.value = idx + 1
  else if (idx >= 0 && idx < end) pageIdx.value = idx
  else pageIdx.value = idx - 1
}

onBeforeMount(async () => {
  await getAllShopsList()
  await getShopsListByLocName(typeList.value[pageIdx.value])
})
</script>
