<template>
   <ul class="menu-tab">
      <template v-for="(menuType, idx) in menuStore.getMenuTypeList()" :key="idx">
        <li
          class="menu-tab-item"
          :class="{ 'active-item': menuStore.getCurIdx() === idx }"
          @click="menuStore.changeCurIdx(idx)"
        >
          {{ menuType }}
        </li>
      </template>
    </ul>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menus';
const menuStore = useMenuStore();
</script>
@/stores/menus