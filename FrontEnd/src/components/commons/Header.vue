<!--헤더 파일-->
<template>
  <header class="my-20">
    <!-- 로그인을 한 경우 -->
    <!-- vuex에서 memberInfo를 가져옴 -->
    <v-row class="menu" v-if="memberInfo !== null">
      <li>
        <router-link to="/" class="text-center text-sm-center linktext"
          ><img src="../../assets/images/logo.png" alt=""
        /></router-link>
      </li>
      <li>
        <router-link to="/menu" class="text-center text-sm-center">메뉴보기</router-link>
      </li>
      <li>
        <router-link to="/notice" class="text-center text-sm-center">공지사항</router-link>
      </li>
      <li>
        <router-link to="/find" class="text-center text-sm-center">매장찾기</router-link>
      </li>
      <li>
        <v-row>
          <router-link to="/mypage" class="mr-4">
            {{ memberInfo.memberName }}({{ memberInfo.memberId }})님 환영합니다.
          </router-link>

          <span @click.prevent="onClickLogout" class="logoutBtn"> LOGOUT </span>
        </v-row>
      </li>
    </v-row>
    <!-- 로그인을 하지않은 경우 -->
    <v-row class="menu" v-else>
      <li>
        <router-link to="/" class="text-center text-sm-center linktext"
          ><img src="../../assets/images/logo.png" alt=""
        /></router-link>
      </li>
      <li>
        <router-link to="/menu" class="text-center text-sm-center">메뉴보기</router-link>
      </li>
      <li>
        <router-link to="/notice" class="text-center text-sm-center">공지사항</router-link>
      </li>
      <li>
        <router-link to="/find" class="text-center text-sm-center">매장찾기</router-link>
      </li>
      <li>
        <router-link to="/login" class="text-sm-center">로그인</router-link>
      </li>
    </v-row>
  </header>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['memberInfo', 'isLogin']),
  },
  methods: {
    // 로그아웃.
    onClickLogout() {
      this.$store
        .dispatch('LOGOUT')
        .then(() => {
          // 현재 위치가 / 가 아니면 /로 이동.
          if (this.$route.path !== '/') this.$router.replace('/');
        })
        .catch(() => {
          console.log('로그아웃 문제!!!');
        });
    },
  },
};
</script>
<style>
ul,
li {
  list-style: none;
}
a {
  display: block;
  text-decoration: none;
  color: #3b2212;
  font-weight: bold;
}
img {
  margin: 0 auto;
  vertical-align: middle;
}
.menu {
  background-color: #ffea00;
}
.menu li {
  width: 20%;
  text-align: center;
  line-height: 100px;
}
.menu li:hover > a {
  transition: all 0.6s;
  font-size: 1.05rem;
  color: #770012;
  font-weight: bold;
}
.menu li a {
  color: #3b2212;
}
.logoutBtn {
  color: #3b2212;
  font-weight: 900;
}
</style>
