<template>
  <div class="notice-title-wrap">
    <h1>공지사항</h1>
    <button class="notice-edit-button" @click="createNotice" v-if="userStore.userInfo.isAdmin">
      등록
    </button>
  </div>
</template>
<script setup lang="ts">
import { useNoticeStore } from '@/stores/notices';
import { useModalStore } from '@/stores/modal';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore()
const noticeStore = useNoticeStore()
const modalStore = useModalStore()
const createNotice = async () =>{
  await noticeStore.setNoticeId(0);
  await modalStore.setModalStatus('edit');
  await modalStore.toggleIsOpen(true)
}
</script>