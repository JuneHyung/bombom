<template>
  <div class="notice-wrap">
    <div class="notice-title-wrap">
      <h1>공지사항</h1>
      <button class="notice-edit-button" @click="createNotice" v-if="userStore.userInfo.isAdmin">
        등록
      </button>
    </div>
    <table>
      <thead>
        <template v-for="(hLabel, idx) in headLabelList" :key="idx">
          <th>{{ hLabel }}</th>
        </template>
      </thead>
      <tbody v-if="noticeList.length !== 0">
        <template v-for="item in noticeList" :key="item">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.noticeTitle }}</td>
            <td>{{ item.noticeDate }}</td>
            <td>{{ item.noticeView }}</td>
            <td>
              <MdiIcon name="mdi-eye-outline" @click="getNoticeDetail(item.id)"></MdiIcon>
              <MdiIcon
                name="mdi-pencil"
                class="bb-mx-sm"
                @click="modifyNotice(item.id)"
                v-if="userStore.userInfo.isAdmin"
              ></MdiIcon>
              <MdiIcon
                name="mdi-trash-can-outline"
                @click="deleteNotice(item.id)"
                v-if="userStore.userInfo.isAdmin"
              ></MdiIcon>
            </td>
          </tr>
        </template>
      </tbody>
      <tbody v-else>
        <tr class="no-data-row">
          <td colspan="5">No Data Sorry</td>
        </tr>
      </tbody>
    </table>
    <ul class="pagenate-list">
      <li class="pagenate-item" @click="changeCurIdx(curIdx - 1)">prev</li>
      <template v-for="(num, idx) in numList" :key="idx">
        <li
          class="pagenate-item"
          :class="{ 'active-number': idx === curIdx }"
          @click="changeCurIdx(idx)"
        >
          {{ num }}
        </li>
      </template>
      <li class="pagenate-item" @click="changeCurIdx(curIdx + 1)">next</li>
    </ul>
  </div>
  <NoticeModal :modalStatus="modalStatus" :noticeId="noticeId"></NoticeModal>
</template>

<script setup lang="ts">
import NoticeModal from '@/components/notice/NoticeModal.vue'
import MdiIcon from '@/components/common/MdiIcon.vue'
// import noticeData from '@/constant/noticeData.json'
import { getAllNotices, deleteNoticeById } from '@/api/notices'
import { computed, onMounted, ref, watch, type Ref, type ComputedRef } from 'vue'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { useModalStore } from '@/stores/modal'
import type {NoticeList} from '@/types/notices'
const userStore = useUserStore()
const modalStore = useModalStore()

const curIdx = ref(0)
const maxCnt = 10

const modalStatus = ref('edit');
const noticeId = ref(0);


const noticeList: ComputedRef<NoticeList> = computed(() =>
  curIdx.value * maxCnt + maxCnt <= noticesData.value.length
    ? noticesData.value.slice(curIdx.value * maxCnt, curIdx.value * maxCnt + maxCnt)
    : noticesData.value.slice(curIdx.value * maxCnt)
)
// const noticeList = [];
const noticesData: Ref<NoticeList> = ref([])

const changeCurIdx = (idx: number) => {
  const end = Math.ceil(noticesData.value.length / maxCnt)
  if (idx < 0) curIdx.value = idx + 1
  else if (idx < end) curIdx.value = idx
  else curIdx.value = idx - 1
}

const headLabelList = ['글 번호', '제목', '작성일', '조회수', 'Actions']
const numList: Ref<number[]> = ref([])
const getAllNoticesList = async () => {
  const data = await getAllNotices()
  noticesData.value = data
  curIdx.value = 0
  const num = Math.ceil(noticesData.value.length / maxCnt)
  numList.value = Array.from({ length: num }, (_, i) => i + 1)
}



const getNoticeDetail = async (id:number) => {
  noticeId.value = id;
  modalStatus.value = 'detail';
  modalStore.toogleIsOpen(true)
}

const createNotice = async () =>{
  noticeId.value = 0;
  modalStatus.value = 'edit';
  modalStore.toogleIsOpen(true)
}

const modifyNotice = async (id: number) =>{
  noticeId.value = id;
  modalStatus.value = 'modify';
  modalStore.toogleIsOpen(true)
}

const deleteNotice = async (id: number) => {
  const data = await deleteNoticeById(id)
  if (data.code === 200) {
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: '삭제 완료 하였습니다!'
    });
    getAllNoticesList();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: '삭제 실패 하였습니다!'
    });
  }
}


watch(()=>modalStore.isOpen, (newV, oldV)=>{
  if(modalStore.isOpen===false) getAllNoticesList();
})
onMounted(() => {
  getAllNoticesList()
})
</script>
<style scoped>
.block {
  width: 100%;
  height: 40px;
}
</style>
