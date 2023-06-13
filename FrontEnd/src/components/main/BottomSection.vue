<template>
  <IntroduceSection>
    <template #left-pannel>
      <h1>{{INTRODUCE_BOMBOM.title}}</h1>
      <template v-for="(introExplain, idx) in INTRODUCE_BOMBOM.explain01" :key="idx">
        <p>{{ introExplain }}</p>
      </template>
    </template>
    <template #right-pannel>
      <div>
        <img :src="INTRODUCE_BOMBOM.introduceImg" alt="소개 이미지">
      </div>
    </template>
  </IntroduceSection>
</template>
<script setup>
import IntroduceSection from '@/components/main/IntroduceSection.vue';
import {INTRODUCE_BOMBOM} from '@/constant/mainPageText.js';
</script>