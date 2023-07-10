<template>
  <ul class="banner-wrapper">
    <template v-for="(item, idx) in bannerList" :key="idx">
      <Transition name="fade">
        <li class="banner-item" v-if="curIdx===idx">
          <img :src="item.url" :alt="item.alt" />
        </li>
      </Transition>
    </template>
  </ul>
</template>
<script setup lang="ts">
import type { BannerItem } from '@/types/main';
import { onBeforeUnmount, onMounted, ref } from 'vue'
const props = defineProps<{
  bannerList: BannerItem[],
}>();
const curIdx = ref(0)

let countCurIdx:any  = null;

onMounted(() => {
  countCurIdx = setInterval(() => {
    curIdx.value = curIdx.value < props.bannerList.length - 1 ? curIdx.value + 1 : curIdx.value-props.bannerList.length+1;
  }, 3000)
})
onBeforeUnmount(()=>{
  clearInterval(countCurIdx);
})


</script>
<style scoped lang="scss">

</style>
