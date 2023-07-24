<template>
  <div class="common-form-wrap">
    <div class="common-content-box">
      <div class="common-title-box">
        <h1>비밀번호를 입력해주세요.</h1>
      </div>
      <form class="common-form-box">
        <label for="" class="common-input-wrap">
          <span class="common-input-label">{{ formData.userPw.label }}</span>
          <input
            :type="formData.userPw.type"
            :placeholder="formData.userPw.placeholder"
            v-model="formData.userPw.value"
            :disabled="formData.userPw.disabled"
            class="common-input"
          />
        </label>
        <div class="button-wrap">
          <button type="button" class="common-button bb-mr-sm" @click="moveBack">취소</button>
          <button type="button" class="common-button" @click="checkPassword">입력</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { postCheckPassword } from '@/api/users'
import Swal from 'sweetalert2'
const router = useRouter()
const userStore = useUserStore()
const formData = ref({
  userPw: {
    value: '',
    placeholder: '새 비밀번호를 입력해주세요.',
    disabled: false,
    label: '비밀번호',
    type: 'password'
  }
})

const moveBack = () => {
  router.back()
}

const checkPassword = async () => {
  const body = {
    userId: userStore.userInfo.userId,
    userPw: formData.value.userPw.value
  }
  const data = await postCheckPassword(body)
  if (data.code === 200) {
    router.push({ name: 'MyPage' })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'ERROR!',
      text: data.message
    })
  }
}

onMounted(() => {
  const isLogin = userStore.isLogin
  if (!isLogin) router.push({ name: 'Main' })
})
</script>
