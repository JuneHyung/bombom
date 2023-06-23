import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue';
import MenuPage from '@/pages/menu/MenuPage.vue';
import NoticePage from '@/pages/notice/NoticePage.vue';
import FindPage from '@/pages/find/FindPage.vue';
import LoginPage from '@/pages/user/LoginPage.vue';
import SignupPage from '@/pages/user/SignupPage.vue';

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
      path: '/find',
      name: 'Find',
      component: FindPage
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
  ]
})

export default router
