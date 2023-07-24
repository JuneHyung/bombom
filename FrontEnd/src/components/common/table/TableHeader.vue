<template>
  <thead>
    <template v-for="(hLabel, idx) in props.list" :key="idx">
      <th>{{ hLabel }}</th>
    </template>
  </thead>
</template>
<script setup lang="ts">
interface Props {
  list: string[]
}
const props = defineProps<Props>()
</script>
