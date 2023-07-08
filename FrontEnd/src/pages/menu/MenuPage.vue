<template>
  <div class="menu-wrap">
    <ul class="menu-tab">
      <template v-for="(menuType, idx) in menuTypeList" :key="idx">
        <li
          class="menu-tab-item"
          :class="{ 'active-item': curIdx === idx }"
          @click="changeCurIdx(idx)"
        >
          {{ menuType }}
        </li>
      </template>
    </ul>
    <ul class="menu-tab-pane">
      <template v-for="(item, idx) in menuList" :key="idx">
        <li class="menu-tab-pane-item">
          <div class="menu-image-box">
            <img :src="item.menuImg" :alt="item.menuName" />
          </div>
          <p class="menu-info-text">
            <span class="menu-item-name">{{ item.menuName }}</span>
            <span class="menu-item-price">{{ item.menuPrice }}</span>
          </p>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import {getAllMenuTypes, getMenusByMenuType} from '@/api/menus';
import type {MenuList} from '@/types/menus'
const curIdx = ref(0)
const menuTypeList: Ref<string[]> = ref([]);
const menuList: Ref<MenuList> = ref([]);
const changeCurIdx = (idx: number) =>{ 
  curIdx.value = idx
  getMenuListByMenuType(menuTypeList.value[idx]);
};

const getAllMenuTypeList = async () =>{
  const data = await getAllMenuTypes();
  menuTypeList.value = data;
}

const getMenuListByMenuType = async (menuType: string) =>{
  const data = await getMenusByMenuType(menuType);
  menuList.value =data;
}

onMounted(async ()=>{
  await getAllMenuTypeList();
  await getMenuListByMenuType(menuTypeList.value[curIdx.value]);
})


</script>
