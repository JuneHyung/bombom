<template>
  <div class="common-form-wrap">
    <div class="common-content-box">
      <div class="common-title-box">
        <h1>MY PAGE</h1>
      </div>
      <form class="common-form-box">
        <template v-for="(key, idx) in Object.keys(formData)" :key="idx">
          <label :for="key" class="common-input-wrap">
            <span class="common-input-label">{{ formData[key as keyof UserFormData].label }}</span>
            <input
              :type="formData[key as keyof UserFormData].type"
              :placeholder="formData[key as keyof UserFormData].placeholder"
              :disabled="formData[key as keyof UserFormData].disabled"
              v-model="formData[key as keyof UserFormData].value"
              class="common-input"
              :class="{'disabled-input': key==='userId' && formData.userId.disabled}"
            />
          </label>
        </template>

        <div class="button-wrap">
          <button type="button" class="common-button" @click="deleteAccount">회원탈퇴</button>
          <button type="button" class="common-button bb-mx-sm" @click="moveBack">취소</button>
          <button type="button" class="common-button bb-mr-sm" @click="initUserInfo">초기화</button>
          <button type="button" class="common-button" @click="updateAccount">수정</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import {putUserInfo, deleteUserInfo} from '@/api/users'
import Swal from 'sweetalert2';
import type { UpdateRequestBody, UserFormData } from '@/types/user';

const router = useRouter()
const userStore = useUserStore()
const formData: Ref<UserFormData> = ref({
  userId: { value: '', placeholder: '아이디를 입력해주세요.', disabled: true ,label: '아이디', type:'text'},
  userPw: { value: '', placeholder: '새 비밀번호를 입력해주세요.', disabled: false,label: '비밀번호', type:'password' },
  userName: { value: '', placeholder: '이름을 입력해주세요.', disabled: false,label: '이름', type:'text' },
  userEmail: { value: '', placeholder: 'Email을 입력해주세요.', disabled: false,label: 'Email', type:'text' },
  userAddress: { value: '', placeholder: '주소를 입력해주세요.', disabled: false,label: '주소', type:'text' },
  userTel: { value: '', placeholder: '전화번호 숫자로만 입력해주세요.', disabled: false,label: '전화번호', type:'text' }
})

const deleteAccount = async () => {
  const data = await deleteUserInfo(userStore.userInfo.userId);
  if(data.code===200){ 
    Swal.fire({
      icon: 'success',
      title: 'SUCCESS',
      text: data.message
    });
    userStore.logout();
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

const makeBody = (body: UserFormData): UpdateRequestBody =>{
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
    formData.value[ key as keyof UserFormData].value = userInfo[key]
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
