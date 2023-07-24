<template>
  <div class="shops-content-wrap">
    <div class="map-wrap-box">
      <KakaoMap :addressList="shopStore.getShopMapList()"></KakaoMap>
    </div>
    <ShopLocTabList></ShopLocTabList>
    <ShopTable></ShopTable>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount} from 'vue'
import KakaoMap from '@/components/common/KakaoMap.vue'
import {useShopStore} from '@/stores/shops';
import ShopLocTabList from '@/components/shops/ShopLocTabList.vue';
import ShopTable from '@/components/shops/ShopTable.vue';
const shopStore = useShopStore();

onBeforeMount(async () => {
  await shopStore.getAllShopList();
  const typeList = shopStore.getLocTypeList();
  const pageIdx = shopStore.getPageIdx();
  await shopStore.getShopListByLocName(typeList[pageIdx]);
})
</script>
