<!-- 메인페이지 하단부에 들어갈 소개페이지 -->
<template>
  <div class="introduceBox">
    <v-row class="rowbox">
      <div class="leftbox">
        <h1>The Cafe 봄봄</h1>
        <br />
        <h2>Take-Out 전문 브랜드 Cafe 봄봄</h2>
        <br />
        <p>
          Cafe 봄봄'은 take-out 전문 카페로 출발하였습니다. 대학가에서 차별화 된 메뉴와 특별한
          운영시스템으로 많은 학생들의 사랑을 받았습니다. take-out 시장이 커지면서 'Cafe 봄봄'은
          대학가를 넘어 중심가, 주택가 곳곳에서 한층 더 성장했습니다.
        </p>
        <br />
        <h2>차별화를 추구하여 보다 성장하는 Cafe 봄봄</h2>
        <br />
        <p>
          Cafe 봄봄'은 2012년 부터 대구를 거점으로 성장해왔으며 2015년 가맹사업을 시작하였습니다.
          지금은 서울/경기, 대구/경북, 부산/경남 등 전국 번화가 곳곳에 자리를 잡고 성업 중입니다. 그
          배경에는 ‘봄봄’만의 특별한 메뉴와 매력이 있습니다. '보다 저렴한', '보다 맛있는', '보다
          양이 많은', '보다 친절한', '보다 빠른' 커피와 음료로 매니아층을 형성하였으며, take-out
          시장에서는 빠질 수 없는 카페로 인정받았습니다. 'Cafe 봄봄'은 현재에도 끊임없는 메뉴개발과
          노력으로 성장을 거듭하고 있습니다
        </p>
      </div>
      <div class="rightbox">
        <img
          src="@/assets/images/introduce01.png"
          alt="소개이미지"
          style="display: block; margin: 0 auto"
        />
      </div>
    </v-row>
    <v-row class="rowbox">
      <div class="leftbox">
        <img
          src="@/assets/images/introduce02.png"
          alt="소개이미지"
          style="display: block; margin: 0 auto"
        />
      </div>
      <div class="rightbox">
        <h1>Brand Concept</h1>
        <br />
        <h1>'봄(Spring)'을 '보다'</h1>
        <br />
        <p>
          Cafe 봄봄은 '봄'이라는 밝고 산뜻한 분위기에 '봄'처럼 따스한 커피 한 잔의 작은 사치를 누릴
          수 있는 행복한 공간입니다.
        </p>
        <br />
        <p>
          봄에 피는 꽃과 같이 화사하고, 밝고, 산뜻한 매장<br />
          친절함과 발랄함이 돋보이는 분위기<br />
          꽃처럼 화려한 비주얼의 음료<br />
        </p>
      </div>
    </v-row>
    <v-row class="rowbox">
      <div class="leftbox addressbox">
        <h1>본점위치</h1>
        <p>
          대구광역시 수성구 달구벌대로 2280<br />
          (수성동1가 89-42) 4층
        </p>
      </div>
      <div class="rightbox">
        <GmapMap ref="mapRef" :center="center[0]" :zoom="20" style="width: 100%; height: 300px">
          <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" />
        </GmapMap>
      </div>
    </v-row>
    <v-row class="rowbox">
      <div class="leftbox addressbox">
        <h1>대전교육장</h1>
        <p>
          대구광역시 수성구 달구벌대로 2280<br />
          (수성동1가 89-42) 4층
        </p>
      </div>
      <div class="rightbox">
        <GmapMap ref="mapRef" :center="center[1]" :zoom="20" style="width: 100%; height: 300px">
          <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" />
        </GmapMap>
      </div>
    </v-row>

    <div class="bgBox">
      <v-row class="rowbox" style="padding-top: 100px; margin-bottom: 0">
        <div class="leftbox pt-10">
          <div>
            <img src="@/assets/images/yellow_logo.png" alt="노란로고" />
          </div>
          <h2 style="color: #ffea00">Cafe 봄봄은 take-out 전문 카페로 출발하였습니다.</h2>
          <p style="color: #ddd">
            <br />
            차별화 된 메뉴로 대학가에서 많은 학생들의 사랑을 받았습니다.<br />
            take-out 시장이 커지면서 ‘Cafe 봄봄’은 이제 대학가를 넘어 중심가,<br />
            주택가 곳곳에서 한층 더 성장하고 있습니다. 앞으로도 Cafe 봄봄은 차별화를 추구하여 보다
            성장하는 브랜드가 되도록 최선을 다하겠습니다.
          </p>
        </div>
        <div class="rightbox">
          <img src="@/assets/images/section01.png" alt="#" style="width: 100%; height: 100%" />
        </div>
      </v-row>
    </div>
  </div>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=API 키 값"></script>
<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'API 키 값',
    libararies: 'places',
  },
});
export default {
  data() {
    return {
      // 보여질 지도의 중간지점 위치
      center: [
        {
          lat: 35.8597,
          lng: 128.611546,
        },
        {
          lat: 36.327998,
          lng: 127.428815,
        },
      ],
      // 마킹될 마커의 위치
      markers: [
        {
          position: {
            lat: 35.8597,
            lng: 128.611546,
          },
        },
        {
          position: {
            lat: 36.327998,
            lng: 127.428815,
          },
        },
      ],
    };
  },
};
</script>
<style>
p {
  font-size: 20px;
}
.introduceBox {
  background-image: url('../../assets/images/blossom.gif');
  background-size: 50%;
}
.rowbox {
  width: calc(100% - 620px);
  margin: 40px auto;
}
.leftbox,
.rightbox {
  width: 50%;
}
.bgBox {
  height: 600px;
  background-image: url('../../assets/images/sectionbg.png');
  background-size: 100%;
}
</style>
