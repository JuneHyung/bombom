
<template>
  <div class="app-wrapper">
    <NavHeader />
    <RouterView />
    <NavFooter />
    
  </div>
</template>
<script setup>
import NavHeader from '@/components/common/header/NavHeader.vue';
import NavFooter from '@/components/common/footer/NavFooter.vue';
</script>
