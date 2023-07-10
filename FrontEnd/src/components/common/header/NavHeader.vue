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
      <changeableItemByLogIn />
    </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
import {FIXED_MENU_LIST} from '@/constant/menuList';
import { defineAsyncComponent, computed } from 'vue';
import {useUserStore} from '@/stores/user';

const BeforeLogInItem = defineAsyncComponent(()=>import('@/components/common/header/BeforeLogInItem.vue'));
const AfterLogInItem = defineAsyncComponent(()=>import('@/components/common/header/AfterLogInItem.vue'));

const userStore = useUserStore();
const changeableItemByLogIn =computed(()=>userStore.isLogin ? AfterLogInItem : BeforeLogInItem)
</script>