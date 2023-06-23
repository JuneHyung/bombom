<template>
  <div class="signup-form-wrap">
    <div class="signup-content-box">
      <div class="signup-title-box">
        <h1>회원가입</h1>
      </div>
      <form class="signup-form-box">
        <label for="" class="id-wrap">
          <span class="id-label">아이디</span>
          <input
            type="text"
            :placeholder="formData.id.placeholder"
            v-model="formData.id.value"
            class="id-input"
          />
        </label>
        <label for="" class="pw-wrap">
          <span class="pw-label">비밀번호</span>
          <input
            type="password"
            :placeholder="formData.pw.placeholder"
            v-model="formData.pw.value"
            class="pw-input"
          />
        </label>
        <label for="" class="name-wrap">
          <span class="name-label">이름</span>
          <input
            type="text"
            :placeholder="formData.name.placeholder"
            v-model="formData.name.value"
            class="name-input"
          />
        </label>
        <label for="" class="email-wrap">
          <span class="email-label">E-mail</span>
          <input
            type="text"
            :placeholder="formData.email.placeholder"
            v-model="formData.email.value"
            class="email-input"
          />
        </label>
        <label for="" class="address-wrap">
          <span class="address-label">주소</span>
          <input
            type="text"
            :placeholder="formData.address.placeholder"
            v-model="formData.address.value"
            class="address-input"
          />
        </label>
        <label for="" class="tel-wrap">
          <span class="tel-label">전화번호</span>
          <input
            type="text"
            :placeholder="formData.tel.placeholder"
            v-model="formData.tel.value"
            class="tel-input"
          />
        </label>
        <div class="button-wrap">
          <button type="button" class="cancel-button" @click="moveBack">취소</button>
          <button type="button" class="reset-button" @click="resetFormData">초기화</button>
          <button type="button" class="signup-button" @click="signUp">회원가입</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const formData = ref({
  id: { value: '', placeholder: '아이디를 입력해주세요.' },
  pw: { value: '', placeholder: '비밀번호를 입력해주세요.' },
  name: { value: '', placeholder: '이름을 입력해주세요.' },
  email: { value: '', placeholder: 'Email을 입력해주세요.' },
  address: { value: '', placeholder: '주소를 입력해주세요.' },
  tel: { value: '', placeholder: '전화번호 숫자로만 입력해주세요.' }
})
const moveBack = () => {
  router.back()
}
const resetFormData = () => {
  const keys = Object.keys(formData.value);
  for(const key of keys) formData.value[key].value = '';
}
const signUp = () => {
  router.push({ name: 'Login' })
}
</script>
