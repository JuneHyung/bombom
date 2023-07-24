<template>
  <ul class="pagenate-list">
    <li class="pagenate-item" @click="store.changePageIdx(store.getPageIdx() - 1)">prev</li>
    <template v-for="(num, idx) in store.getNumList()" :key="idx">
      <li
        class="pagenate-item"
        :class="{ 'active-number': idx === store.getPageIdx() }"
        @click="store.changePageIdx(idx)"
      >
        {{ num }}
      </li>
    </template>
    <li class="pagenate-item" @click="store.changePageIdx(store.getPageIdx() + 1)">next</li>
  </ul>
</template>
<script setup lang="ts">
import { useNoticeStore } from '@/stores/notices';
import { useShopStore } from '@/stores/shops';

const props = defineProps({
  type: String
})
const store = props.type==='shop' ? useShopStore() : useNoticeStore()
</script>