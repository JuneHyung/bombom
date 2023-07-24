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
      <button
        class="common-button bb-mx-sm"
        v-if="modalStore.getModalStatus() !== 'detail'"
        @click="closeCreateModal"
      >
        취소
      </button>
      <button
        class="common-button bb-mx-sm"
        v-if="modalStore.getModalStatus() !== 'detail'"
        @click="modalStore.getModalStatus() === 'modify' ? updateNotice() : createNotice()"
      >
        저장
      </button>
      <button class="common-button bb-mx-sm" v-else @click="closeCreateModal">확인</button>
    </template>
  </CustomModal>
</template>
<script setup lang="ts">
import CustomModal from '@/components/common/CustomModal.vue'
import { getNoticeById, postNotice, putNoticeById } from '@/api/notices'
import { useModalStore } from '@/stores/modal'
import { ref, watch, type Ref } from 'vue'
import Swal from 'sweetalert2'
import type { NoticeFormData, postNoticeBody, putNoticeBody } from '@/types/notices'
import { useNoticeStore } from '@/stores/notices'
const noticeStore = useNoticeStore()
const modalStore = useModalStore()

const formData: Ref<NoticeFormData> = ref({
  noticeTitle: { value: '', placeholder: '제목을 입력해주세요.', disabled: false },
  noticeContent: { value: '', placeholder: '내용을 입력해주세요.', disabled: false }
})

const closeCreateModal = () => {
  modalStore.toggleIsOpen(false)
}

const getDetailNotice = async () => {
  const notice = await getNoticeById(noticeStore.getNoticeId())
  return notice
}

const initEdit = async () => {
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    const KeyTypeAssertion = key as keyof NoticeFormData
    formData.value[KeyTypeAssertion].value = ''
    formData.value[KeyTypeAssertion].disabled = false
  }
}

const initModify = async () => {
  const data = await getDetailNotice()
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    const KeyTypeAssertion = key as keyof NoticeFormData
    formData.value[KeyTypeAssertion].disabled = false
    formData.value[KeyTypeAssertion].value = data[KeyTypeAssertion]
  }
}

const initDetail = async () => {
  const data = await getDetailNotice()
  const keys = Object.keys(formData.value)
  console.log('asdf')
  for (let i = 0; i < keys.length; i++) {
    const KeyTypeAssertion = keys[i] as keyof NoticeFormData
    formData.value[KeyTypeAssertion].value = data[KeyTypeAssertion]
    formData.value[KeyTypeAssertion].disabled = true
  }
}

const makePostBody = async () => {
  const result: postNoticeBody = {
    noticeTitle: '',
    noticeContent: ''
  }
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    const KeyTypeAssertion = key as keyof NoticeFormData
    result[KeyTypeAssertion] = formData.value[KeyTypeAssertion].value
  }
  return result
}

const makePutBody = async (id?: number) => {
  const result: putNoticeBody = {
    noticeTitle: '',
    noticeContent: ''
  }

  const keys = Object.keys(formData.value)
  for (const key of keys) {
    const KeyTypeAssertion = key as keyof NoticeFormData
    result[KeyTypeAssertion] = formData.value[KeyTypeAssertion].value
  }
  if (modalStore.getModalStatus() === 'modify') result.noticeId = id
  return result
}

const createNotice = async () => {
  const body = await makePostBody()
  const data = await postNotice(body)
  if (data.code === 200) {
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: '등록 완료 하였습니다!'
    })
    closeCreateModal()
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: '등록 실패!'
    })
  }
}

const updateNotice = async () => {
  const body = await makePutBody(noticeStore.getNoticeId())

  const data = await putNoticeById(body)
  if (data.code === 200) {
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: '저장 완료 하였습니다!'
    })
    closeCreateModal()
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: '저장 실패!'
    })
  }
}

const initData = async () => {
  console.log(modalStore.getModalStatus())
  switch (modalStore.getModalStatus()) {
    case 'edit':
      await initEdit()
      break
    case 'modify':
      await initModify()
      break
    case 'detail':
      await initDetail()
      break
  }
}

watch(() => modalStore.isOpen, (nV, oV) => {
  if (modalStore.isOpen) initData()
})
</script>
