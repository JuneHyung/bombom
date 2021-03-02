import Vue from "vue";
import VueRouter from "vue-router";

import Main from "@/components/views/main.vue";
import Login from "@/components/views/login.vue";
import Notice from "@/components/views/notice.vue";
import Menu from "@/components/views/menu.vue";
import Find from "@/components/views/find.vue";

import MenuList from "@/components/menu/MenuList.vue";

import Join from "@/components/member/Join.vue";
import MyPage from "@/components/member/MyPage.vue";
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
