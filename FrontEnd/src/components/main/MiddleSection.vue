<template>
  
  <IntroduceSection>
    <template #left-pannel>
      <div>
        <h1>{{ABOUT_BOMBOM.title}}</h1>
        <h2>{{ ABOUT_BOMBOM.subtitle01 }}</h2>
        <template v-for="(textItem , idx) in ABOUT_BOMBOM.explain01" :key="idx">
          <p>{{textItem}}</p>
        </template>
      </div>
      <div>
        <h2>{{ ABOUT_BOMBOM.subtitle02 }}</h2>
        <template v-for="(textItem , idx) in ABOUT_BOMBOM.explain02" :key="idx">
          <p>{{textItem}}</p>
        </template>
      </div>
    </template>
    <template #right-pannel>
      <p><img :src="ABOUT_BOMBOM.introduceImg" alt="소개이미지"></p>
    </template>
  </IntroduceSection>
  <IntroduceSection>]
    <template #left-pannel>
      <p><img :src="BRAND_CONCEPT.introduceImg" alt="소개이미지"></p>
    </template>
    <template #right-pannel>
      <div>
        <h1>{{BRAND_CONCEPT.title}}</h1>
        <h2>{{ BRAND_CONCEPT.subtitle01 }}</h2>
        <template v-for="(textItem , idx) in BRAND_CONCEPT.explain01" :key="idx">
          <p>{{textItem}}</p>
        </template>
      </div>
      <div>
        <template v-for="(textItem , idx) in BRAND_CONCEPT.explain02" :key="idx">
          <p>{{textItem}}</p>
        </template>
      </div>
    </template>
  </IntroduceSection>
</template>
<script setup>
import IntroduceSection from '@/components/main/IntroduceSection.vue';
import {ABOUT_BOMBOM, BRAND_CONCEPT} from '@/constant/mainPageText.js'

</script>