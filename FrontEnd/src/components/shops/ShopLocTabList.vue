<template>
  <ul class="type-list-wrap-box">
    <template v-for="(typeItem, tIdx) in shopStore.getLocTypeList()" :key="tIdx">
      <li
        class="type-item"
        :class="{ 'active-item': shopStore.getTypeIdx() === tIdx }"
        @click="shopStore.getShopListByLocName(typeItem)"
      >
        {{ typeItem }}
      </li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import {useShopStore} from '@/stores/shops';
const shopStore = useShopStore();
</script>
