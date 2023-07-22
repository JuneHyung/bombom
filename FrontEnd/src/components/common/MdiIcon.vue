<template>
  <svg width="24" height="24" viewBox="0 0 24 24" class="cursor-pointer">
    <path :d="mdiIcons[props.name as keyof typeof mdiIcons]"></path>
  </svg>
</template>
<script setup lang="ts">
import * as mdiIcons from "@mdi/js";
interface Props{
  name: string,
}

const props = defineProps<Props>()

</script>