// import { ref, computed } from 'vue'
// import type { UserInfo } from '@/types/user';
import type { SignupRequestBody, UserInfo } from '@/types/user'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
export const useUserStore = defineStore('user-store', () => {
  const userInfo: Ref<UserInfo> = ref({
    userId: '',
    userName: '',
    userEmail: '',
    userAddress: '',
    userTel: '',
    isAdmin: false,
    joinDate: ''
  })
  const isLogin = ref(false)

  function initUserInfo() {
    const keys = Object.keys(userInfo.value)
    for (const key of keys) {
      userInfo.value[key as keyof UserInfo] = ''
    }
  }
  function setUserInfo(info: UserInfo) {
    const keys = Object.keys(info)
    initUserInfo()
    for (const key of keys) {
      userInfo.value[key as keyof UserInfo] = info[key]
    }
  }
  function setIsLogin(flag: boolean) {
    isLogin.value = flag
    if (!flag) initUserInfo()
  }
  function getIsLogin() {
    return isLogin.value
  }

  function logout() {
    localStorage.removeItem('token')
    setIsLogin(false)
  }

  return {
    userInfo,
    isLogin,
    initUserInfo,
    setUserInfo,
    setIsLogin,
    getIsLogin,
    logout
  }
})
