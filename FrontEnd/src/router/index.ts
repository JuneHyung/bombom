import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue';
import MenuPage from '@/pages/menu/MenuPage.vue';
import NoticePage from '@/pages/notice/NoticePage.vue';
import ShopsPage from '@/pages/shops/ShopsPage.vue';
import LoginPage from '@/pages/user/LoginPage.vue';
import SignupPage from '@/pages/user/SignupPage.vue';
import MyPage from '@/pages/user/MyPage.vue';

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
      path: '/mypage',
      name: 'MyPage',
      component: MyPage,
    },
  ]
})

export default router
