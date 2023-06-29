<template>
  <div class="common-form-wrap">
    <div class="common-content-box">
      <div class="common-title-box">
        <h1>회원가입</h1>
      </div>
      <form class="common-form-box">
        <template v-for="(key, idx) in Object.keys(formData)" :key="idx">
          <label :for="key" class="common-input-wrap">
            <span class="common-input-label">{{ formData[key].label }}</span>
            <input
              :type="formData[key].type"
              :placeholder="formData[key].placeholder"
              v-model="formData[key].value"
              class="common-input"
            />
          </label>
        </template>
        <div class="button-wrap">
          <button type="button" class="common-button" @click="moveBack">취소</button>
          <button type="button" class="common-button bb-mx-sm" @click="resetFormData">
            초기화
          </button>
          <button type="button" class="common-button" @click="signUp">회원가입</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { postUser } from '@/api/users.js'
import Swal from 'sweetalert2'
const router = useRouter()
const formData = ref({
  userId: { value: '', placeholder: '아이디를 입력해주세요.', label: '아이디', type:'text' },
  userPw: { value: '', placeholder: '비밀번호를 입력해주세요.', label: '비밀번호', type:'password' },
  userName: { value: '', placeholder: '이름을 입력해주세요.', label: '이름', type:'text' },
  userEmail: { value: '', placeholder: 'Email을 입력해주세요.', label: 'E-mail', type:'text' },
  userAddress: { value: '', placeholder: '주소를 입력해주세요.', label: '주소', type:'text' },
  userTel: { value: '', placeholder: '전화번호 숫자로만 입력해주세요.', label: '전화번호', type:'text' }
})

const moveBack = () => {
  router.back()
}
const resetFormData = () => {
  const keys = Object.keys(formData.value)
  for (const key of keys) formData.value[key].value = ''
}
const makeBody = (body) => {
  const result = {
    userId: body.userId.value,
    userPw: body.userPw.value,
    userName: body.userName.value,
    userEmail: body.userEmail.value,
    userAddress: body.userAddress.value,
    userTel: body.userTel.value,
    isAdmin: false,
    joinDate: new Date()
  }
  return result
}
const signUp = async () => {
  const body = makeBody(formData.value)
  const data = await postUser(body)

  if (data.code === 200) {
    Swal.fire({
      icon: 'success',
      title: 'GOOD JOB!',
      text: data.message
    })
    router.push({ name: 'Login' })
  } else {
    Swal.fire({
      icon: 'ERROR',
      title: 'ERROR!',
      text: data.message
    })
  }
}

</script>
