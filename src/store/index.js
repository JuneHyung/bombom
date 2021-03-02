import Vue from "vue";
import Vuex from "vuex";
import jwt_decode from "jwt-decode";
import { findById } from "@/api/user.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false, // 로그인 여부
    memberInfo: null
  },
  mutations: {
    setIsLogined(state, isLogin) {
      state.isLogin = isLogin;
    },
    setMemberInfo(state, memberInfo) {
      state.isLogin = true;
      state.memberInfo = memberInfo;
    },
    logout(state) {
      state.isLogin = false;
      state.memberInfo = null;
    }
  },
  actions: {
    async GET_MEMBER_INFO({ commit }, token) {
      let decode = jwt_decode(token);
      decode.memberId
      await findById(
        decode.memberId,
        (response) => {
          if (response.data.message === "success") {
            commit("setMemberInfo", response.data.memberInfo);
            // router.push("/");
            // router.go(router.currentRoute);
          } else {
            console.log("유저 정보 없음!!");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    LOGOUT({ commit }) {
      commit("logout");
      localStorage.removeItem("access-token");
      // axios.defaults.headers.common["auth-token"] = undefined;
    }
  },
  modules: {}
});