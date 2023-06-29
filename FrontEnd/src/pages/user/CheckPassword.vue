<template>

<div class="signup-form-wrap">
    <div class="signup-content-box">
      <div class="signup-title-box">
        <h1>비밀번호를 입력해주세요.</h1>
      </div>
      <form class="signup-form-box">
        <label for="" class="pw-wrap">
          <span class="pw-label">비밀번호</span>
          <input
            type="password"
            :placeholder="formData.userPw.placeholder"
            v-model="formData.userPw.value"
            :disabled="formData.userPw.disabled"
            class="pw-input"
          />
        </label>
        <div class="button-wrap">
          <button type="button" class="reset-button" @click="moveBack">취소</button>
          <button type="button" class="signup-button" @click="checkPassword">입력</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'
import {postCheckPassword} from '@/api/users.js';
import Swal from 'sweetalert2';
const router = useRouter();
const userStore = useUserStore();
const formData = ref({
  userPw: { value: '', placeholder: '새 비밀번호를 입력해주세요.', disabled: false },
})

const moveBack = () => {
  router.back()
}

const checkPassword = async () => {
  const body = {
    id: userStore.userInfo.userId,
    password: formData.value.userPw.value
  }
  const data = await postCheckPassword(body);
  if(data.code===200){
    router.push({name:'MyPage'})
  }else{
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