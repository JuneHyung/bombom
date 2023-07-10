<template>
  <div class="bottomSection-outter-wrap">
    <IntroduceSection>
      <template #left-pannel>
        <div class="text-pannel">
          <h1>{{ INTRODUCE_BOMBOM.title }}</h1>
          <template v-for="(introExplain, idx) in INTRODUCE_BOMBOM.explain01" :key="idx">
            <p>{{ introExplain }}</p>
          </template>
        </div>
      </template>
      <template #right-pannel>
        <div class="image-pannel">
          <img :src="INTRODUCE_BOMBOM.introduceImg" alt="소개 이미지" />
        </div>
      </template>
    </IntroduceSection>
  </div>
</template>
<script setup lang="ts">
import IntroduceSection from '@/components/main/IntroduceSection.vue'
import { INTRODUCE_BOMBOM } from '@/constant/mainPageText'
</script>
