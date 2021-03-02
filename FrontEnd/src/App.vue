<template>
  <v-app>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </v-app>
</template>

<script>
import NavHeader from './components/commons/Header.vue';
import NavFooter from './components/commons/Footer.vue';

export default {
  name: 'App',

  components: {
    NavHeader,
    NavFooter,
  },
};
</script>
<style>
* {
  font-family: 'OpenSans';
}
</style>
