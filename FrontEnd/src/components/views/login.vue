<!-- 로그인 화면 -->
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark style="background-color: #3b2212">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="memberId"
                v-model="member.memberId"
                required
                label="아이디"
                type="text"
                @keyup.enter="confirm"
              ></v-text-field>
              <v-text-field
                id="memberPw"
                v-model="member.memberPw"
                required
                label="비밀번호"
                type="password"
                @keyup.enter="confirm"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn style="background-color: #ffea00">
              <router-link to="/join" style="color: #3b2212"> 회원가입</router-link></v-btn
            >
            <v-btn @click="confirm" style="background-color: #ffea00">로그인</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { login } from '@/api/user.js';
export default {
  data() {
    return {
      member: {
        memberId: '',
        memberPw: '',
      },
      isLoginError: false,
    };
  },
  methods: {
    confirm() {
      localStorage.setItem('access-token', ''); // 로컬 스토리지에 access-token을 set함.
      console.log('클릭');
      login(
        this.member,
        (response) => {
          console.log('여기까지옴'); // 확인용
          if (response.data.message === 'success') {
            // success 메세지가 돌아오면
            let token = response.data['access-token'];
            this.$store.commit('setIsLogined', true); // isLogin에 true값넣음.
            localStorage.setItem('access-token', token);
            this.$store.dispatch('GET_MEMBER_INFO', token);
            this.$router.push('/');
          } else {
            this.isLoginError = true;
          }
        },
        (error) => {
          console.error(error);
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      );
    },
  },
};
</script>
<style></style>
