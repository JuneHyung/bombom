<template>
  <div class="login-form-wrap">
    <div class="login-content-box">
      <div class="login-title-box">
        <h1>로그인 해주세요</h1>
      </div>
      <form class="login-form-box">
        <label for="" class="id-wrap">
          <span class="id-label">아이디</span>
          <input type="text" v-model="formData.id.value" :placeholder="formData.id.placeholder" class="id-input"/></label>
        <label for="" class="pw-wrap">
          <span class="pw-label">비밀번호</span>
          <input type="password"  v-model="formData.password.value" :placeholder="formData.password.placeholder" class="pw-input" />
        </label>
        <div class="button-wrap">
          <button type="button" class="signup-button" @click="moveSignup">회원가입</button>
          <button type="button" class="login-button" @click="moveLogin">로그인</button>
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
  id: {value: '', placeholder: '아이디를 입력해주세요.'},
  password: {value: '', placeholder: '비밀번호를 입력해주세요.'},
})

const moveLogin = async () =>{
  const body = {
    id: formData.value.id.value,
    password: formData.value.password.value
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