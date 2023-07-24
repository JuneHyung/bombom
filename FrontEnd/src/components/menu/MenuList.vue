<template>
  <ul class="menu-tab-pane">
      <template v-for="(item, idx) in menuStore.menuList" :key="idx">
        <MenuItem :item="item"></MenuItem>
      </template>
    </ul>
</template>
<script setup lang="ts">
import { useMenuStore } from '@/stores/menus';
import MenuItem from './MenuItem.vue';
const menuStore = useMenuStore();

</script>