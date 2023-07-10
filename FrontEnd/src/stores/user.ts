// import { ref, computed } from 'vue'
// import type { UserInfo } from '@/types/user';
import type { UserInfo } from '@/types/user';
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user-store',
  state: () =>{
    return{
      userInfo: {
        userId: '',
        userName: '',
        userEmail: '',
        userAddress: '',
        userTel: '',
        isAdmin: false,
        joinDate: '',
      },
      isLogin: false,
    }
  },
  actions:{
    initUserInfo(){
      const keys = Object.keys(this.userInfo);
      for(const key of keys){
        this.userInfo[key] = '';
      }
    },
    setUserInfo(info: UserInfo){
      const keys = Object.keys(info);
      this.initUserInfo();
      for(const key of keys){
        this.userInfo[key] = info[key];
      }
    },
    setIsLogin(flag: boolean){
      this.isLogin = flag;
      if(!flag) this.initUserInfo();
    },
    getIsLogin() {return this.isLogin}
  }
})
