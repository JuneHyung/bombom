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
    // 로그인 했는지 안했는지 상태를 지정.
    setIsLogined(state, isLogin) {
      state.isLogin = isLogin;
    },
    // 멤버정보를 state에 넣어줌
    setMemberInfo(state, memberInfo) {
      state.isLogin = true;
      state.memberInfo = memberInfo;
    },
    // 로그아웃
    // 로그인 상태를 체크하는 isLogin을 false로, memberInfo를 null로 비움으로써 초기화.
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