<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12" v-if="modifyFlag">
          <v-toolbar dark style="background-color: #3b2212;">
            <v-toolbar-title>마이페이지</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="memberId"
                v-model="memberInfo.memberId"
                required
                label="아이디"
                type="text"
                readonly
              ></v-text-field>
              <v-text-field
                id="memberPw"
                v-model="memberInfo.memberPw"
                required
                label="비밀번호"
                type="password"
              ></v-text-field>
              <v-text-field
                id="memberName"
                v-model="memberInfo.memberName"
                required
                label="이름"
                type="text"
              ></v-text-field>
              <v-text-field
                id="memberEmail"
                v-model="memberInfo.memberEmail"
                required
                label="E-mail"
                type="email"
              ></v-text-field>
              <v-text-field
                id="memberAddress"
                v-model="memberInfo.memberAddress"
                required
                label="주소"
                type="text"
              ></v-text-field>
              <v-text-field
                id="memberTel"
                v-model="memberInfo.memberTel"
                required
                label="전화번호"
                type="tel"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn style="background-color: #ffea00; color: #3b2212;" @click="CancelModify"
              >취 소</v-btn
            >
            <v-btn style="background-color: #ffea00; color: #3b2212;" @click="ModifyMember">
              수정완료</v-btn
            >
          </v-card-actions>
        </v-card>

        <v-card class="elevation-12" v-if="!modifyFlag">
          <v-toolbar dark style="background-color: #3b2212;">
            <v-toolbar-title>마이페이지</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                id="memberId"
                v-model="memberInfo.memberId"
                required
                label="아이디"
                type="text"
                readonly
              ></v-text-field>
              <v-text-field
                id="memberPw"
                v-model="memberInfo.memberPw"
                required
                label="비밀번호"
                type="password"
                readonly
              ></v-text-field>
              <v-text-field
                id="memberName"
                v-model="memberInfo.memberName"
                required
                label="이름"
                type="text"
                readonly
              ></v-text-field>
              <v-text-field
                id="memberEmail"
                v-model="memberInfo.memberEmail"
                required
                label="E-mail"
                type="email"
                readonly
              ></v-text-field>
              <v-text-field
                id="memberAddress"
                v-model="memberInfo.memberAddress"
                required
                label="주소"
                type="text"
                readonly
              ></v-text-field>
              <v-text-field
                id="memberTel"
                v-model="memberInfo.memberTel"
                required
                label="전화번호"
                type="tel"
                readonly
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              @click="modifyOnBtn"
              style="background-color: #ffea00; color:#3b2212;"
              type="reset"
            >
              수정하기
            </v-btn>
            <v-btn @click="deleteMember" style="background-color: #ffea00; color: #3b2212;">
              탈퇴하기</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import http from '@/util/http-common';
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['memberInfo', 'isLogin']),
  },
  data() {
    return {
      modifyFlag: false,
    };
  },
  created() {
    http
      .get(`/member/info/${this.memberInfo.memberId}`)
      .then(({ data }) => {
        this.member = data;
      })
      .catch(() => {
        alert('에러가 발생하였습니다.');
      });
  },
  methods: {
    deleteMember() {
      http
        .delete(`/member/deleteMember/${this.memberInfo.memberId}`, {
          memberId: this.memberInfo.memberId,
        })
        .then(() => {
          this.$store
            .dispatch('LOGOUT')
            .then(() => {
              // this.$router.push({ name: "" });
              if (this.$route.path !== '/') this.$router.replace('/');
            })
            .catch(() => {
              console.log('로그아웃 문제!!!');
            });
          alert('삭제성공');
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    modifyOnBtn() {
      this.modifyFlag = true;
    },
    CancelModify() {
      this.modifyFlag = false;
      location.href = '/mypage';
    },
    ModifyMember() {
      http
        .put(`/member/updateMember/${this.memberInfo.memberId}`, {
          memberId: this.memberInfo.memberId,
          memberPw: this.memberInfo.memberPw,
          memberName: this.memberInfo.memberName,
          memberEmail: this.memberInfo.memberEmail,
          memberAddress: this.memberInfo.memberAddress,
          memberTel: this.memberInfo.memberTel,
        })
        .then(() => {
          this.modifyFlag = false;
          alert('수정 성공!');
        })
        .catch(() => {
          alert('수정 실패!');
        });
    },
  },
};
</script>

<style></style>
