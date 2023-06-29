<template>
  <CustomModal>
    <template #header>
      <h2>Notice Edit</h2>
    </template>

    <form class="notice-form-box">
      <label for="" class="notice-title-wrap">
        <span class="notice-title-label">제목</span>
        <input
          type="text"
          :placeholder="formData.noticeTitle.placeholder"
          :disabled="formData.noticeTitle.disabled"
          v-model="formData.noticeTitle.value"
          class="notice-title-input"
        />
      </label>
      <label for="" class="notice-content-wrap">
        <span class="notice-content-label">내용</span>
        <textarea
          :placeholder="formData.noticeContent.placeholder"
          :disabled="formData.noticeContent.disabled"
          v-model="formData.noticeContent.value"
          rows="10"
          class="notice-content-input"
        />
      </label>
    </form>

    <template #footer>
      <button class="common-button bb-mx-sm"  v-if="props.modalStatus!=='detail'" @click="closeCreateModal">취소</button>
      <button class="common-button bb-mx-sm" v-if="props.modalStatus!=='detail'" @click="props.modalStatus==='modify' ? updateNotice : createNotice()">저장</button>
      <button class="common-button bb-mx-sm" v-else @click="closeCreateModal">확인</button>
    </template>
  </CustomModal>
</template>
<script setup>
import CustomModal from '@/components/common/CustomModal.vue'
import { getNoticeById, postNotice, putNoticeById } from '@/api/notices.js'
import { useModalStore } from '@/stores/modal.js'
import { onMounted, onUpdated, ref } from 'vue'
import Swal from 'sweetalert2';
const props = defineProps({
  modalStatus: String,
  noticeId: Number
})

const modalStore = useModalStore()

const closeCreateModal = () => {
  modalStore.toogleIsOpen(false);
}

const formData = ref({
  noticeTitle: { value: '', placeholder: '제목을 입력해주세요.', disabled: false },
  noticeContent: { value: '', placeholder: '내용을 입력해주세요.', disabled: false }
})

const initEdit = () => {
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    formData.value[key].value = ''
    formData.value[key].disabled = false
  }
}

const getDetailNotice = async () => {
  const notice = await getNoticeById(props.noticeId)
  return notice
}

const initModify = async () => {
  const data = await getDetailNotice()
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    formData.value[key].value = data[key]
    formData.value[key].disabled = false
  }
}

const initDetail = async () => {
  const data = await getDetailNotice()
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    formData.value[key].value = data[key]
    formData.value[key].disabled = true
  }
}

const makeBody = () =>{
  const keys = Object.keys(formData.value);
  const result = {};
  for(const key of keys){
    result[key] = formData.value[key].value;
  }
  if(props.modalStatus==='modify')result.noticeId = props.noticeId.value
  return result;
}

const createNotice = async () =>{
  const data = await postNotice(makeBody());
  if(data.code===200){
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: '등록 완료 하였습니다!'
    });
    closeCreateModal();
  }else{
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: '등록 실패!'
    });
  }
}

const updateNotice = async () =>{
  const body = makeBody();
  const data = await putNoticeById(body);
  if(data.code===200){
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: '저장 완료 하였습니다!'
    });
    closeCreateModal();
  }else{
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: '저장 실패!'
    });
  }
}

onUpdated(()=>{
  if (props.modalStatus) {
    switch (props.modalStatus) {
      case 'edit':
        initEdit()
        break
      case 'modify':
        initModify()
        break
      case 'detail':
        initDetail()
        break
    }
  }
})
</script>
