<!--푸터 파일-->
<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="white--text text-center"
      style="background-color: #3b2212; margin: 0 auto; width: 100%"
    >
      <v-card-text>
        <!--반복문을 통해 sns 아이콘들을 출력-->
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0" style="width: 100%; margin: 0 auto">
        This site is made by JuneHyung for Vue Study. Welcome!! <br />
        원래의 카페봄봄사이트는
        <a href="https://www.cafebombom.co.kr" style="display: inline; color: #fff"
          >https://www.cafebombom.co.kr</a
        >
        입니다. Vue 공부를 위해 만들었습니다.<br />
        Tel : 010-7917-2614 <br />
        E-mail : cjh951114@naver.com
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
};
</script>
<style></style>
