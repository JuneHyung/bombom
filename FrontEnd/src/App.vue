
<template>
  <NavHeader />
  <RouterView />
  <NavFooter />
</template>
<script setup lang="ts">
import NavHeader from '@/components/common/header/NavHeader.vue';
import NavFooter from '@/components/common/footer/NavFooter.vue';
</script>
