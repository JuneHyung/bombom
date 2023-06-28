// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user-store',
  state:() =>{
    return{
      userInfo: {
        userId: '',
        userName: '',
        userEmail: '',
        userAddress: '',
        userTel: '',
        isAdmin: 0,
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
    setUserInfo(info){
      const keys = Object.keys(info);
      this.initUserInfo();
      for(const key of keys){
        this.userInfo[key] = info[key];
      }
    },
    setIsLogin(flag){
      this.isLogin = flag;
      if(!flag) this.initUserInfo();
    },
    getIsLogin() {return this.isLogin}
  }
})
