<template>
  <div class="notice-wrap">
    <div class="notice-title-wrap">
      <h1>공지사항</h1>
      <button class="notice-edit-button">등록</button>
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
            <td>{{ item.noticeNo }}</td>
            <td>{{ item.noticeTitle }}</td>
            <td>{{ item.noticeDate }}</td>
            <td>{{ item.noticeView }}</td>
            <td>
              <MdiIcon name="mdi-eye-outline"></MdiIcon>
              <MdiIcon name="mdi-pencil" class="bb-mx-sm"></MdiIcon>
              <MdiIcon name="mdi-trash-can-outline"></MdiIcon>
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
import { computed, onMounted, ref } from 'vue';
const curIdx = ref(0);
const maxCnt = 10;

const noticeList = computed(()=> curIdx.value*maxCnt+maxCnt<=noticeData.length ? noticeData.slice(curIdx.value*maxCnt, curIdx.value*maxCnt+maxCnt) : noticeData.slice(curIdx.value*maxCnt));
// const noticeList = [];
const changeCurIdx = (idx) => {
  const end = Math.ceil(noticeData.length/maxCnt);
  if(idx<0) curIdx.value = idx+1;
  else if(idx<end) curIdx.value = idx;
  else curIdx.value = idx-1;
}
const headLabelList = ['글 번호', '제목', '작성일', '조회수', 'Actions']
const numList = ref([]);
onMounted(()=>{
  const num = Math.ceil(noticeData.length/maxCnt)
  numList.value = Array.from({length: num},(_,i)=>i+1)
})
</script>
