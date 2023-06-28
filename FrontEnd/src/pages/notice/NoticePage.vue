<template>
  <div class="notice-wrap">
    <div class="notice-title-wrap">
      <h1>공지사항</h1>
      <button class="notice-edit-button" @click="openCreateModal" v-if="userStore.userInfo.isAdmin">등록</button>
    </div>
    <table>
      <thead>
        <template v-for="(hLabel, idx) in headLabelList" :key="idx">
          <th>{{ hLabel }}</th>
        </template>
      </thead>
      <tbody v-if="noticeList.length!==0">
        <template v-for="item in noticeList" :key="item">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.noticeTitle }}</td>
            <td>{{ item.noticeDate }}</td>
            <td>{{ item.noticeView }}</td>
            <td>
              <MdiIcon name="mdi-eye-outline" @click="getNoticeDetail(item.id)"></MdiIcon>
              <MdiIcon name="mdi-pencil" class="bb-mx-sm" v-if="userStore.userInfo.isAdmin"></MdiIcon>
              <MdiIcon name="mdi-trash-can-outline" @click="deleteNotice(item.id)" v-if="userStore.userInfo.isAdmin"></MdiIcon>
            </td>
          </tr>
        </template>
      </tbody>
      <tbody v-else>
        <tr class="no-data-row">
          <td colspan=5>No Data Sorry</td>
        </tr>
      </tbody>
    </table>
    <ul class="pagenate-list">
      <li class="pagenate-item" @click="changeCurIdx(curIdx-1)">prev</li>
      <template v-for="(num, idx) in numList" :key="idx">
        <li class="pagenate-item" :class="{'active-number': idx===curIdx}" @click="changeCurIdx(idx)">{{ num }}</li>
      </template>
      <li class="pagenate-item" @click="changeCurIdx(curIdx+1)">next</li>
    </ul>
  </div>
</template>

<script setup>
import MdiIcon from '@/components/common/MdiIcon.vue';
import noticeData from '@/constant/noticeData.json';
import {getAllNotices, getNoticeById, deleteNoticeById} from '@/api/notices.js';
import { computed, onMounted, ref } from 'vue';
import Swal from 'sweetalert2'
import {useUserStore} from '@/stores/user.js';
const userStore = useUserStore();

const curIdx = ref(0);
const maxCnt = 10;

const noticeList = computed(()=> curIdx.value*maxCnt+maxCnt<=noticesData.value.length ? noticesData.value.slice(curIdx.value*maxCnt, curIdx.value*maxCnt+maxCnt) : noticesData.value.slice(curIdx.value*maxCnt));
// const noticeList = [];
const noticesData = ref([]);

const changeCurIdx = (idx) => {
  const end = Math.ceil(noticeData.length/maxCnt);
  if(idx<0) curIdx.value = idx+1;
  else if(idx<end) curIdx.value = idx;
  else curIdx.value = idx-1;
}
const headLabelList = ['글 번호', '제목', '작성일', '조회수', 'Actions']
const numList = ref([]);
const getAllNoticesList = async () =>{
  const data = await getAllNotices();
  noticesData.value = data;
  curIdx.value = 0;
  const num = Math.ceil(noticesData.value.length/maxCnt)
  numList.value = Array.from({length: num},(_,i)=>i+1)
}

const getNoticeDetail = async (noticeId) => {
  const data = await getNoticeById(noticeId);
  console.log(data);
}
// const getNoticeDetail = async (noticeId) => {
//   const data = await getNoticeById(noticeId);
//   console.log(data);
// }
const deleteNotice = async (noticeId) => {
  console.log('asdf')
  const data = await deleteNoticeById(noticeId);
  console.log(data);
  if(data.code===1){
  getAllNoticesList();
  }else{
    alert('실패')
  }
}

const testData = ref('');

const openCreateModal = () =>{
  Swal.fire({
    title: '공지사항 등록',
    input: ''
  })
}

onMounted(()=>{
  getAllNoticesList();
})
</script>
<style scoped>
.block{
  width:100%;
  height:40px;
}
</style>
