<template>
  <header class="nav-header">
    <nav class="nav-list">
      <li class="nav-item logo-img">
        <RouterLink :to="{name: 'Main'}" ></RouterLink>
      </li>
      <ul class="nav-after-list">
      <template v-for="(item, idx) in FIXED_MENU_LIST" :key="idx">
        <li class="nav-item">
          <RouterLink :to="{name: item.name}">{{item.label}}</RouterLink>
        </li>
      </template>
      <changeableItemByLogIn class="nav-item"></changeableItemByLogIn>
    </ul>
    </nav>
  </header>
</template>
<script setup>
import {FIXED_MENU_LIST} from '@/constant/menuList';
import { ref, defineAsyncComponent } from 'vue';
const flag = ref(false); // 로그인 확인용 임시 플레그 => true : 로그인, false: 로그인 전
const changeableItemByLogIn = defineAsyncComponent(()=> flag.value ? import('@/components/common/header/AfterLogInItem.vue') : import('@/components/common/header/BeforeLogInItem.vue'))
</script>