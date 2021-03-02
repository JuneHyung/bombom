import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/components/views/main.vue"; // 메인페이지
import Login from "@/components/views/login.vue"; // 로그인 페이지
import Notice from "@/components/views/notice.vue"; // 공지사항 페이지
import Menu from "@/components/views/menu.vue"; // 메뉴 페이지
import Find from "@/components/views/find.vue"; // 점포확인 페이지

import MenuList from "@/components/menu/MenuList.vue"; // 메뉴 리스트 페이지

import Join from "@/components/member/Join.vue"; // 회원가입 페이지
import MyPage from "@/components/member/MyPage.vue"; // 마이 페이지
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/join",
      name: "Join",
      component: Join
    },
    {
      path: "/mypage",
      name: "MyPage",
      component: MyPage
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu
    },
    {
      path: "/menu/menulist",
      name: "MenuList",
      component: MenuList
    },
    {
      path: "/notice",
      name: "Notice",
      component: Notice
    },
    {
      path: "/find",
      name: "Find",
      component: Find
    },
    
  ]
});
