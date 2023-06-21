<template>
  <ul>
    <template v-for="(item) in typeList" :key="item.menuNo"></template>
    <li>{{ item }}</li>
  </ul>
</template>
<script setup>
import { onMounted } from "vue";

const props = defineProps({
  typeList: Array,
})
onMounted(()=>{
  console.log(props.typeList);
})

</script>