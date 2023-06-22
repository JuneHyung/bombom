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
<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  bannerList: Array
})
const curIdx = ref(0)

const countCurIdx = () => {
  setInterval(() => {
    curIdx.value = curIdx.value < props.bannerList.length - 1 ? curIdx.value + 1 : 0
  }, 3000)
}
onMounted(() => {
  countCurIdx()
})
</script>
<style scoped lang="scss">

</style>
