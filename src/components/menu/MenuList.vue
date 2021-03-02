<template>
  <v-row class="text-center">
    <v-col v-for="item in items" :key="item.menuNo" cols="12" md="3">
      <v-card>
        <v-img :src="require(`@/assets/images/menu/new/${item.menuImg}`)" aspect-ratio="1" />

        <v-card-title class="title">
          <v-spacer></v-spacer>{{ item.menuName }} {{ item.menuPrice }}<v-spacer></v-spacer>
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

  created() {
    http
      .get('/menu/new')
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
