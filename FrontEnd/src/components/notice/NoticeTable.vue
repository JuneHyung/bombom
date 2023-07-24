<template>
  <table>
    <thead>
      <template v-for="(hLabel, idx) in headLabelList" :key="idx">
        <th>{{ hLabel }}</th>
      </template>
    </thead>
    <tbody v-if="noticeStore.getNoticeList().length !== 0">
      <template v-for="item in noticeStore.getDisplayNoticeList()" :key="item">
        <tr>
          <td>{{ item.id }}</td>
          <td>{{ item.noticeTitle }}</td>
          <td>{{ item.noticeDate }}</td>
          <td>{{ item.noticeView }}</td>
          <td>
            <MdiIcon name="mdiEyeOutline" @click="setNoticeDetailItem(item.id)"></MdiIcon>
            <MdiIcon
              name="mdiPencil"
              class="bb-mx-sm"
              @click="setNoticeModifyItem(item.id)"
              v-if="userStore.userInfo.isAdmin"
            ></MdiIcon>
            <MdiIcon
              name="mdiTrashCanOutline"
              @click="noticeStore.deleteNotice(item.id)"
              v-if="userStore.userInfo.isAdmin"
            ></MdiIcon>
          </td>
        </tr>
      </template>
    </tbody>
    <tbody v-else>
      <TableNoData></TableNoData>
    </tbody>
  </table>
  <ul class="pagenate-list">
    <li class="pagenate-item" @click="noticeStore.setCurIdx(noticeStore.getCurIdx() - 1)">prev</li>
    <template v-for="(num, idx) in noticeStore.getNumList()" :key="idx">
      <li
        class="pagenate-item"
        :class="{ 'active-number': idx === noticeStore.getCurIdx() }"
        @click="noticeStore.setCurIdx(idx)"
      >
        {{ num }}
      </li>
    </template>
    <li class="pagenate-item" @click="noticeStore.setCurIdx(noticeStore.getCurIdx() + 1)">next</li>
  </ul>
</template>
<script setup lang="ts">
import TableNoData from '@/components/common/table/TableNoData.vue'
import MdiIcon from '@/components/common/MdiIcon.vue'
import { useUserStore } from '@/stores/user'
import { useNoticeStore } from '@/stores/notices'
import { useModalStore } from '@/stores/modal';
const userStore = useUserStore()
const noticeStore = useNoticeStore()
const modalStore = useModalStore()

const headLabelList = ['글 번호', '제목', '작성일', '조회수', 'Actions']

const setNoticeDetailItem = async (id: number) =>{
  await noticeStore.setNoticeId(id);
  await modalStore.setModalStatus('detail');
  await modalStore.toggleIsOpen(true);
}

const setNoticeModifyItem = async (id: number) =>{
  await noticeStore.setNoticeId(id);
  await modalStore.setModalStatus('modify');
  await modalStore.toggleIsOpen(true);
}

</script>