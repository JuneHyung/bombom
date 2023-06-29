<template>
  <div class="signup-form-wrap">
    <div class="signup-content-box">
      <div class="signup-title-box">
        <h1>MY PAGE</h1>
      </div>
      <form class="signup-form-box">
        <label for="" class="id-wrap">
          <span class="id-label">아이디</span>
          <input
            type="text"
            :placeholder="formData.userId.placeholder"
            v-model="formData.userId.value"
            :disabled="formData.userId.disabled"
            class="id-input"
          />
        </label>
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
        <label for="" class="name-wrap">
          <span class="name-label">이름</span>
          <input
            type="text"
            :placeholder="formData.userName.placeholder"
            v-model="formData.userName.value"
            :disabled="formData.userName.disabled"
            class="name-input"
          />
        </label>
        <label for="" class="email-wrap">
          <span class="email-label">E-mail</span>
          <input
            type="text"
            :placeholder="formData.userEmail.placeholder"
            v-model="formData.userEmail.value"
            :disabled="formData.userEmail.disabled"
            class="email-input"
          />
        </label>
        <label for="" class="address-wrap">
          <span class="address-label">주소</span>
          <input
            type="text"
            :placeholder="formData.userAddress.placeholder"
            v-model="formData.userAddress.value"
            :disabled="formData.userAddress.disabled"
            class="address-input"
          />
        </label>
        <label for="" class="tel-wrap">
          <span class="tel-label">전화번호</span>
          <input
            type="text"
            :placeholder="formData.userTel.placeholder"
            v-model="formData.userTel.value"
            :disabled="formData.userTel.disabled"
            class="tel-input"
          />
        </label>
        <div class="button-wrap">
          <button type="button" class="signup-button" @click="deleteAccount">회원탈퇴</button>
          <button type="button" class="reset-button" @click="moveBack">취소</button>
          <button type="button" class="reset-button" @click="initUserInfo">초기화</button>
          <button type="button" class="signup-button" @click="updateAccount">수정</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'
import {putUserInfo, deleteUserInfo} from '@/api/users.js'
import Swal from 'sweetalert2';
const router = useRouter()
const userStore = useUserStore()
const formData = ref({
  userId: { value: '', placeholder: '아이디를 입력해주세요.', disabled: true },
  userPw: { value: '', placeholder: '새 비밀번호를 입력해주세요.', disabled: false },
  userName: { value: '', placeholder: '이름을 입력해주세요.', disabled: false },
  userEmail: { value: '', placeholder: 'Email을 입력해주세요.', disabled: false },
  userAddress: { value: '', placeholder: '주소를 입력해주세요.', disabled: false },
  userTel: { value: '', placeholder: '전화번호 숫자로만 입력해주세요.', disabled: false }
})

const deleteAccount = async () => {
  // const params = {userId: }
  console.log('dasf?')
  const data = await deleteUserInfo(userStore.userInfo.userId);
  console.log(data)
  if(data.code===200){ 
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: data.message
    });
    userStore.setIsLogin(false);
    router.back();
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'ERROR!',
      text: data.message
    });
  }
}
const makeBody = (body) =>{
  const result = {
    userId: body.userId.value,
    userPw: body.userPw.value,
    userName: body.userName.value,
    userEmail: body.userEmail.value,
    userAddress: body.userAddress.value,
    userTel: body.userTel.value,
  };
  return result;
}
const moveBack = () => {
  router.push({name: 'Main'})
}

const updateAccount = async () => {
  const body = makeBody(formData.value)

  const data = await putUserInfo(body);

  if(data.code===200){ 
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: data.message
    });
    router.back();
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'ERROR!',
      text: data.message
    });
  }
}

const initUserInfo = () => {
  const userInfo = userStore.userInfo
  const keys = Object.keys(formData.value)
  for (const key of keys) {
    formData.value[key].value = userInfo[key]
  }
}

onMounted(() => {
  const isLogin = userStore.isLogin
  if (!isLogin) router.push({ name: 'Main' })
  else {
    initUserInfo()
  }
})
</script>
