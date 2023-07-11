<template>
  <div class="common-form-wrap">
    <div class="common-content-box">
      <div class="common-title-box">
        <h1>로그인 해주세요</h1>
      </div>
      <form class="common-form-box">
        <template v-for="(key, idx) in Object.keys(formData)" :key="idx">
          <label :for="key" class="common-input-wrap">
            <span class="common-input-label">{{ formData[key as keyof LoginFormData].label }}</span>
            <input
              :type="formData[key as keyof LoginFormData].type"
              :placeholder="formData[key as keyof LoginFormData].placeholder"
              v-model="formData[key as keyof LoginFormData].value"
              class="common-input"
            />
          </label>
        </template>
        
        <div class="button-wrap">
          <button type="button" class="common-button bb-mr-sm" @click="moveSignup">회원가입</button>
          <button type="button" class="common-button" @click="moveLogin">로그인</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useRouter} from 'vue-router';
import {postUserLogin} from '@/api/users';
import { ref, type Ref } from 'vue';
import Swal from 'sweetalert2';

import type { LoginFormData } from '@/types/user';

const router = useRouter();

const moveSignup = () =>{
  router.push({name: 'Signup'})
}

const formData:Ref<LoginFormData> = ref({
  userId: { value: '', placeholder: '아이디를 입력해주세요.', label: '아이디', type:'text' },
  userPw: { value: '', placeholder: '비밀번호를 입력해주세요.', label: '비밀번호', type:'password' },
})

async function saveTokenToLocalStorage(token: string) {
  localStorage.setItem('token', token);
  router.push({name: 'Main'})
}

const moveLogin = async () =>{
  const body = {
    userId: formData.value.userId.value,
    userPw: formData.value.userPw.value
  }

  const data = await postUserLogin(body);
  if(data.code===200){
    await saveTokenToLocalStorage(data.token);
  }else{
    Swal.fire({
      icon: 'error',
      title: `${data.code} ERROR!`,
      text: data.message
    })
  }
}
</script>