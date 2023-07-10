<template>
  <template v-for="(loc, idx) in textList" :key="idx">
    <div class="mapInfo-outter-wrap">
      <IntroduceSection>
        <template #left-pannel>
          <div class="text-pannel">
            <h1>{{ loc[0].name }}</h1>
            <div>{{ loc[0].address }}</div>
          </div>
        </template>
        <template #right-pannel>
          <div class="map-pannel">
            <KakaoMap :addressList="loc"></KakaoMap>
          </div>
        </template>
      </IntroduceSection>
    </div>
  </template>
</template>
<script setup lang="ts">
import IntroduceSection from '@/components/main/IntroduceSection.vue'
import KakaoMap from '@/components/common/KakaoMap.vue'
import { DAEGU_LOCATION, DAEJEON_LOCATION } from '@/constant/mainPageText'
import type { LocationInfoList } from '@/types/main';
const textList:LocationInfoList[] = [DAEGU_LOCATION, DAEJEON_LOCATION]
</script>
