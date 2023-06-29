<template>
  <div class="common-form-wrap">
    <div class="common-content-box">
      <div class="common-title-box">
        <h1>로그인 해주세요</h1>
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
          <button type="button" class="common-button bb-mr-sm" @click="moveSignup">회원가입</button>
          <button type="button" class="common-button" @click="moveLogin">로그인</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import {useRouter} from 'vue-router';
import {postUserLogin} from '@/api/users.js';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import {useUserStore} from '@/stores/user.js';
const router = useRouter();
const userStore = useUserStore();
const moveSignup = () =>{
  router.push({name: 'Signup'})
}

const formData = ref({
  userId: { value: '', placeholder: '아이디를 입력해주세요.', label: '아이디', type:'text' },
  userPw: { value: '', placeholder: '비밀번호를 입력해주세요.', label: '비밀번호', type:'password' },
})

const moveLogin = async () =>{
  const body = {
    id: formData.value.userId.value,
    password: formData.value.userPw.value
  }
  const data = await postUserLogin(body);
  if(data.code===200){
    userStore.setUserInfo(data.userInfo);
    userStore.setIsLogin(true);
    if(userStore.isLogin) router.push({name: 'Main'})
  }else{
    Swal.fire({
      icon: 'error',
      title: `${data.code} ERROR!`,
      text: data.message
    })
  }
}
</script>