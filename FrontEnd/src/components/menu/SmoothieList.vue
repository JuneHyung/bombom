<!-- 스무디 메뉴 목록 -->
<template>
  <v-row>
    <!--반복문으로 클릭했을 때의 메뉴를 보여줌.-->
    <v-col v-for="item in items" :key="item.menuNo" cols="12" md="3">
      <v-card>
        <v-img :src="require(`@/assets/images/menu/smoothie/${item.menuImg}`)" aspect-ratio="1" />
        <v-card-title class="title">
          <v-spacer></v-spacer> {{ item.menuName }} {{ item.menuPrice }} <v-spacer></v-spacer>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import http from '@/util/http-common';

export default {
  data() {
    return {
      items: [],
    };
  },

  // 스무디 메뉴 목록을 가져와 items에 담는다.
  created() {
    http
      .get('/menu/smoothie')
      .then(({ data }) => {
        this.items = data;
      })
      .catch(() => {
        alert('에러가 발생하였습니다.');
      });
  },
};
</script>
<style></style>
