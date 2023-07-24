<template>
  <div class="menu-wrap">
    <MenuTabList></MenuTabList>
    <MenuList></MenuList>
  </div>
</template>

<script setup lang="ts">
import MenuTabList from '@/components/menu/MenuTabList.vue'
import MenuList from '@/components/menu/MenuList.vue';
import { useMenuStore } from '@/stores/menus';
import { onMounted } from 'vue';
const menuStore = useMenuStore();

const getMenuListByMenuType = async () => {
  const menuTypeList = menuStore.getMenuTypeList();
  const curIdx = menuStore.getCurIdx();
  menuStore.setAllMenuTypeList();
  menuStore.setMenuListByMenuType(menuTypeList[curIdx])
}

onMounted(async ()=>{
  await menuStore.setAllMenuTypeList();
  await getMenuListByMenuType();
})
</script>
