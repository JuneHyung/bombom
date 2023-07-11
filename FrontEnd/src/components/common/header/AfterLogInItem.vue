<template>
  <li class="nav-item">
    <RouterLink :to="{name: 'CheckPassword'}">
      {{userStore.userInfo.userName}}님 ({{ userStore.userInfo.userId }}) 님 환영합니다.
    </RouterLink>
  </li>
  <button class="logout-button" @click="userStore.logout">LOGOUT</button>
</template>
<script setup lang="ts">
import {useUserStore} from '@/stores/user';
const userStore = useUserStore();
</script>