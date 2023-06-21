<template>
  <ul>
    <template v-for="(item, idx) in list" :key=idx>
    <p>{{item}}</p>
    </template>
  </ul>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  list: Array,
})

onMounted(()=>{
  console.log(props.list)
})
</script>