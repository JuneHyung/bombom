<template>
  <MainBanner :bannerList="bannerList"></MainBanner>
  <MiddleSection></MiddleSection>
  <MapInfo></MapInfo>
  <BottomSection></BottomSection>
</template>
<script setup> 
import MainBanner from '@/components/main/MainBanner.vue';
import MapInfo from '@/components/main/MapInfo.vue';
import MiddleSection from '@/components/main/MiddleSection.vue';
import BottomSection from '@/components/main/BottomSection.vue';

import {getAllShops, getShopsByLocName} from '@/api/shops.js';

import {onMounted} from 'vue';

const bannerList = [
  {url:'src/assets/images/banners/banner01.jpg', alt: 'banner01이미지'},
  {url:'src/assets/images/banners/banner02.jpg', alt: 'banner02이미지'},
  {url:'src/assets/images/banners/banner03.jpg', alt: 'banner03이미지'},
  {url:'src/assets/images/banners/banner04.jpg', alt: 'banner04이미지'},
]
// const getAllShopList = async () =>{
//   // const data = await getAllShops();
//   const all = await getAllShops();
//   const data = await getShopsByLocName('서울');
//   console.log(all)
//   console.log(data)
// }
// onMounted(()=>{
//   getAllShopList();
// })
</script>@/api/shops.js