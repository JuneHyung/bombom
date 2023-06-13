<template>
  <template v-for="(loc, idx) in textList" :key="idx">
  <IntroduceSection>
      <template #left-pannel>
        <h1>{{ loc.title }}</h1>
        <div>{{ loc.address }} </div>
      </template>
      <template #right-pannel>
        <div>지도 나타날 부분</div>
      </template>
    </IntroduceSection>
  </template>
</template>
<script setup>
import IntroduceSection from '@/components/main/IntroduceSection.vue'
import {DAEGU_LOCATION, DAEJEON_LOCATION} from '@/constant/mainPageText.js';
const textList = [
  DAEGU_LOCATION,
  DAEJEON_LOCATION
]
</script>