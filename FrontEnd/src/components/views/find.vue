<!-- 지역별 매장위치를 보여준다. -->
<!-- 지도에 마커가 표시되고 아래에 table목록이 나옴. -->
<template>
  <v-card>
    <GmapMap ref="mapRef" :center="center" :zoom="7" style="width: 100vw; height: 70vh">
      <GmapMarker :key="index" v-for="(m, index) in position" :position="m" />
    </GmapMap>

    <v-tabs background-color="#231f2d accent-4" center-active dark>
      <v-tab @click="allItem">전체</v-tab>
      <v-tab @click="seoulItem">서울특별시</v-tab>
      <v-tab @click="busanItem">부산광역시</v-tab>
      <v-tab @click="daeguItem">대구광역시</v-tab>
      <v-tab @click="incheonItem">인천광역시</v-tab>
      <v-tab>광주광역시</v-tab>
      <v-tab @click="daejeonItem">대전광역시</v-tab>
      <v-tab @click="ulsanItem">울산광역시</v-tab>
      <v-tab @click="saejongItem">세종특별자치시</v-tab>
      <v-tab>경기도</v-tab>
      <v-tab>강원도</v-tab>
      <v-tab>충청북도</v-tab>
      <v-tab>충청남도</v-tab>
      <v-tab>전라북도</v-tab>
      <v-tab>전라남도</v-tab>
      <v-tab>경상북도</v-tab>
      <v-tab>경상남도</v-tab>
      <v-tab>제주특별자치도</v-tab>
    </v-tabs>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </v-card>
</template>
<script src="https://maps.googleapis.com/maps/api/js?key=API 키 값"></script>
<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import http from '@/util/http-common';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'API 키값',
    libararies: 'places',
  },
});
export default {
  data() {
    return {
      headers: [
        { text: '번호', value: 'shopNo', align: 'start' },
        { text: '지역', value: 'locName' },
        { text: '지점명', value: 'shopName' },
        { text: '전화번호', value: 'shopTel' },
        { text: '주소', value: 'shopAddress' },
      ],
      items: [],
      // 처음 기본 center 위치.
      center: {
        lat: 35.8597,
        lng: 128.611546,
      },

      position: [],
    };
  },
  created() {
    // 처음 표시될 모든 점포정보를 items에 담는다.
    http
      .get('/shop')
      .then(({ data }) => {
        this.items = data;
      })
      .catch(() => {
        alert('에러가 발생하였습니다.');
      });
  },

  methods: {
    // 모든 점포정보.
    allItem() {
      http
        .get('/shop')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 서울지역 점포정보
    seoulItem() {
      http
        .get('/shop/seoul')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 부산지역 점포 정보
    busanItem() {
      http
        .get('/shop/busan')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 대구지역 점포 정보
    daeguItem() {
      http
        .get('/shop/daegu')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 대전지역 점포 정보
    daejeonItem() {
      http
        .get('/shop/daejeon')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 울산지역 점포 정보
    ulsanItem() {
      http
        .get('/shop/ulsan')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 세종시지역 점포 정보
    saejongItem() {
      http
        .get('/shop/saejong')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          for (var i in data) {
            this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
    // 인천점포 정보
    incheonItem() {
      http
        .get('/shop/incheon')
        .then(({ data }) => {
          // 마커표시를 위해 position에다가 db에있는 lat과 lng값을 push함.
          this.position = [];
          this.items = data;
          if (this.items === null) {
            alert('이 지역에는 아직 개점한 곳이 없어요!ㅜㅜ');
          } else {
            for (var i in data) {
              this.position.push({ lat: Number(data[i].lat), lng: Number(data[i].lng) });
            }
          }
        })
        .catch(() => {
          alert('에러가 발생하였습니다.');
        });
    },
  },
};
</script>
<style></style>
