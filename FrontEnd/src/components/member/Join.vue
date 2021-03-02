<!-- 회원가입 -->
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark style="background-color: #3b2212">
            <v-toolbar-title>Join Form</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <!-- 각 member객체안의 변수 값을 바인딩 -->
              <v-text-field
                id="memberId"
                v-model="member.memberId"
                required
                label="아이디"
                type="text"
              ></v-text-field>
              <v-text-field
                id="memberPw"
                v-model="member.memberPw"
                required
                label="비밀번호"
                type="password"
              ></v-text-field>
              <v-text-field
                id="memberName"
                v-model="member.memberName"
                required
                label="이름"
                type="text"
              ></v-text-field>
              <v-text-field
                id="memberEmail"
                v-model="member.memberEmail"
                required
                label="E-mail"
                type="email"
              ></v-text-field>
              <v-text-field
                id="memberAddress"
                v-model="member.memberAddress"
                required
                label="주소"
                type="text"
              ></v-text-field>
              <v-text-field
                id="memberTel"
                v-model="member.memberTel"
                required
                label="전화번호"
                type="tel"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn style="background-color: #ffea00; color: #3b2212" type="reset"> 초기화</v-btn>
            <v-btn @click="join" style="background-color: #ffea00; color: #3b2212"> 가입하기</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import http from '@/util/http-common';
export default {
  data() {
    return {
      member: {
        memberId: '',
        memberPw: '',
        memberName: '',
        memberEmail: '',
        memberAddress: '',
        memberTel: '',
      },
    };
  },

  methods: {
    // 회원가입
    join() {
      http
        .post(`member/join`, {
          // {}안의 값들을 가지고 member/join으로 이동.
          memberId: this.member.memberId,
          memberPw: this.member.memberPw,
          memberName: this.member.memberName,
          memberEmail: this.member.memberEmail,
          memberAddress: this.member.memberAddress,
          memberTel: this.member.memberTel,
        })
        .then(() => {
          alert('회원가입 성공!');
        })
        .catch(() => {
          alert('회원가입 실패!');
        });
      location.href = '/login'; // 완료 후 로그인 페이지로 이동.
    },
  },
};
</script>
<style></style>
