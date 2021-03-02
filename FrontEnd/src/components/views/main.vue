<!-- 메인페이지 -->
<template>
  <div>
    <!-- 배너 이미지 표시 -->
    <v-carousel :show-arrows="false" cycle height="650">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`@/assets/images/banners/${item.name}.jpg`)"
        reverse-transition="fade-transition"
        transition="fade-transition"
        class="bannerItem"
      ></v-carousel-item>
    </v-carousel>
    <!-- 소개내용 -->
    <!-- Introduce.vue를 컴포넌트로 가져와 출력 -->
    <introduce></introduce>
  </div>
</template>
<script>
import Introduce from '../main/Introduce.vue';
export default {
  data() {
    return {
      items: [
        {
          name: 'banner01',
        },
        {
          name: 'banner02',
        },
        {
          name: 'banner03',
        },
        {
          name: 'banner04',
        },
      ],
    };
  },
  components: {
    Introduce,
  },
};
</script>
<style></style>
