<template>
  <!-- <div id="map" ref="map" style="width: 100%; height: 100%"></div> -->
  <div class="map-box"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

// const mapKey = import.meta.env.KAKAO_MAP_API_KEY;
const map = ref(null)

onMounted(() => {

})
</script>
<style scoped lang="scss">
.map-box{
  width:100%;
  height:300px;
  border:1px solid black;
}
</style>
