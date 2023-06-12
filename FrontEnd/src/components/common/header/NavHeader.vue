<template>
  <header>
    <ul>
      <li>
        <RouterLink to="/"><p>로고</p></RouterLink>
      </li>
      <template v-for="(item, idx) in FIXED_MENU_LIST" :key="idx">
        <li>
          <RouterLink :to="item.path">{{item.label}}</RouterLink>
        </li>
      </template>
      <changeableItemByLogIn></changeableItemByLogIn>
    </ul>
  </header>
</template>
<script setup>
import {FIXED_MENU_LIST} from '@/constant/menuList';
import { ref, defineAsyncComponent } from 'vue';
const flag = ref(false); // 로그인 확인용 임시 플레그 => true : 로그인, false: 로그인 전
const changeableItemByLogIn = defineAsyncComponent(()=> flag.value ? import('@/components/common/header/AfterLogInItem.vue') : import('@/components/common/header/BeforeLogInItem.vue'))
</script>