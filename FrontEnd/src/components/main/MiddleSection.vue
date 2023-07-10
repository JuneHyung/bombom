<template>
  <div class="introduce-outter-wrap">
    <IntroduceSection>
      <template #left-pannel>
        <div class="text-pannel">
          <div class="text-content01">
            <h1>{{ ABOUT_BOMBOM.title }}</h1>
            <h2>{{ ABOUT_BOMBOM.subtitle01 }}</h2>
            <template v-for="(textItem, idx) in ABOUT_BOMBOM.explain01" :key="idx">
              <p>{{ textItem }}</p>
            </template>
          </div>
          <div class="text-content02">
            <h2>{{ ABOUT_BOMBOM.subtitle02 }}</h2>
            <template v-for="(textItem, idx) in ABOUT_BOMBOM.explain02" :key="idx">
              <p>{{ textItem }}</p>
            </template>
          </div>
        </div>
      </template>
      <template #right-pannel>
        <div class="image-pannel"><img :src="ABOUT_BOMBOM.introduceImg" alt="소개이미지" /></div>
      </template>
    </IntroduceSection>
    <IntroduceSection>
      <template #left-pannel>
        <p class="image-pannel"><img :src="BRAND_CONCEPT.introduceImg" alt="소개이미지" /></p>
      </template>
      <template #right-pannel>
        <div class="text-pannel">
          <div class="text-content01">
            <h1>{{ BRAND_CONCEPT.title }}</h1>
            <h2>{{ BRAND_CONCEPT.subtitle01 }}</h2>
            <template v-for="(textItem, idx) in BRAND_CONCEPT.explain01" :key="idx">
              <p>{{ textItem }}</p>
            </template>
          </div>
          <div class="text-content02">
            <template v-for="(textItem, idx) in BRAND_CONCEPT.explain02" :key="idx">
              <p>{{ textItem }}</p>
            </template>
          </div>
        </div>
      </template>
    </IntroduceSection>
  </div>
</template>
<script setup>
import IntroduceSection from '@/components/main/IntroduceSection.vue'
import { ABOUT_BOMBOM, BRAND_CONCEPT } from '@/constant/mainPageText'
</script>
