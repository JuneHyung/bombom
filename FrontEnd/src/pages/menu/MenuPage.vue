<template>
  <p>메뉴 정보 페이지 입니다.</p>
  <div>
    <ul>
      <template v-for="(menuType, idx) in menuTypeList" :key="idx">
        <li>{{ menuType }}</li>
      </template>
    </ul>
    <ul>
      <template v-for="(item, idx) in menuList" :key="idx">
        <p>{{ item.menuName }}</p>
        <p>{{ item.menuPrice }}</p>
      </template>
    </ul>
  </div>
</template>

<script setup>
import menuData from '@/constant/menuData.json'
import { ref } from 'vue'
const menuTypeList = menuData.map((el) => el.type)
const menuList = ref(menuData.map((el) => el.list)[0])

</script>
