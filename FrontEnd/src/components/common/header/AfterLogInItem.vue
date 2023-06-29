<template>
  <li class="nav-item">
    <RouterLink :to="{name: 'CheckPassword'}">
      {{userStore.userInfo.userName}}님 ({{ userStore.userInfo.userId }}) 님 환영합니다.
    </RouterLink>
  </li>
  <button @click="logout">LOGOUT</button>
</template>
<script setup>
import {useUserStore} from '@/stores/user.js';
const userStore = useUserStore();

const logout = () =>{
  userStore.setIsLogin(false);
}
</script>