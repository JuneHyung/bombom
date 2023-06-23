<template>
  <div class="login-form-wrap">
    <div class="login-content-box">
      <div class="login-title-box">
        <h1>로그인 해주세요</h1>
      </div>
      <form class="login-form-box">
        <label for="" class="id-wrap"><span class="id-label">아이디</span><input type="text" placeholder="아이디" class="id-input"/></label>
        <label for="" class="pw-wrap"><span class="pw-label">비밀번호</span><input type="password" placeholder="비밀번호" class="pw-input" /></label>
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
const router = useRouter();
const moveSignup = () =>{
  router.push({name: 'Signup'})
}
const moveLogin = () =>{
  router.push({name: 'Main'})
}
</script>