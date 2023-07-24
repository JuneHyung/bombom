<template>
  <li class="menu-tab-pane-item">
    <div class="menu-image-box">
      <img :src="props.item.menuImg" :alt="props.item.menuName" />
    </div>
    <p class="menu-info-text">
      <span class="menu-item-name">{{ props.item.menuName }}</span>
      <span class="menu-item-price">{{ props.item.menuPrice }}</span>
    </p>
  </li>
</template>
<script setup lang="ts">
import type {Menu} from '@/types/menus'
interface Props{
  item: Menu
}
const props = defineProps<Props>()
</script>
