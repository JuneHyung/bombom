import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue';
import MenuPage from '@/pages/menu/MenuPage.vue';
import NoticePage from '@/pages/notice/NoticePage.vue';
import ShopsPage from '@/pages/shops/ShopsPage.vue';
import LoginPage from '@/pages/user/LoginPage.vue';
import SignupPage from '@/pages/user/SignupPage.vue';
import MyPage from '@/pages/user/MyPage.vue';
import CheckPassword from '@/pages/user/CheckPassword.vue';

import jwt_decode from 'jwt-decode';
import {useUserStore} from '@/stores/user';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainPage
    },
    {
      path: '/menu',
      name: 'Menu',
      component: MenuPage
    },
    {
      path: '/notice',
      name: 'Notice',
      component: NoticePage
    },
    {
      path: '/shops',
      name: 'Shops',
      component: ShopsPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupPage,
    },
    {
      path: '/checkPassword',
      name: 'CheckPassword',
      component: CheckPassword,
    },
    {
      path: '/mypage',
      name: 'MyPage',
      component: MyPage,
    },
  ]
})


router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token');
  if(token){
    const userStore = useUserStore();
    const decoded = jwt_decode(token);
    userStore.setUserInfo(decoded);
    userStore.setIsLogin(true);
    const currentTime = Date.now() / 1000;
    
    // console.log(decoded.exp , currentTime)
    if(decoded.exp < currentTime){
      // 만료 시 
      localStorage.removeItem('token')
      next();
    }else{
      // 토큰이 유효한 경우
      next();
    }
  }else{
    next();
  }
})

export default router
