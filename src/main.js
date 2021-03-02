import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  async beforeCreate() {
    let token = localStorage.getItem("access-token");
    if (store.state.memberInfo == null && token) {
      await store.dispatch("GET_MEMBER_INFO", token);
    }
  },
  
  render: h => h(App)
}).$mount("#app");
