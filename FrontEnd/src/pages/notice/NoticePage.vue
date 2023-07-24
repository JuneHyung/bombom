<template>
  <div class="notice-wrap">
    <NoticeHeader></NoticeHeader>
    <NoticeTable></NoticeTable>
  </div>
  <NoticeModal></NoticeModal>
</template>

<script setup lang="ts">
import NoticeModal from '@/components/notice/NoticeModal.vue'
import {onMounted, ref, watch,} from 'vue'
import { useModalStore } from '@/stores/modal'

import NoticeTable from '@/components/notice/NoticeTable.vue'
import NoticeHeader from '@/components/notice/NoticeHeader.vue'
import { useNoticeStore } from '@/stores/notices'

const modalStore = useModalStore()
const noticeStore = useNoticeStore()

watch(()=>modalStore.isOpen, (newV, oldV)=>{
  if(modalStore.isOpen===false) noticeStore.getAllNoticesList();
})
onMounted(async () => {
  await noticeStore.getAllNoticesList()
})
</script>
