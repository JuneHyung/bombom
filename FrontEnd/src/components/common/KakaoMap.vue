<template>
  <div ref="map" class="map-box"></div>
  <!-- <div class="map-box"></div> -->
</template>
<script setup>
import { onMounted, onUpdated, ref} from 'vue'
const props = defineProps({
  addressList: Array
})



// 지도 객체
const map = ref(null)

// default center position;
const centerPos = { lat: 33.450701, lng: 126.570667 } 

// 표시한 마커의 이름 표시
const initInfoWindow = (title, marker) => {
  const infowindow = new kakao.maps.InfoWindow({
    content: `<div style="width:150px; text-align:center; padding:4px;">${title}</div>`
  })
  infowindow.open(map.value, marker)
}

// 마커 표시
const initMarker = (title, coords) => {
  const marker = new kakao.maps.Marker({
    map: map.value,
    position: coords
  })
  marker.setMap(map.value)
  initInfoWindow(title, marker)
}

// 범위 재설정
const setBounds = (bounds) => {
  map.value.setBounds(bounds)
}

// 지도 init
const initMap = () => {

  // default 지도 setting
  const options = {
    center: new kakao.maps.LatLng(centerPos.lat, centerPos.lng),
    level: 3
  }
  map.value = new kakao.maps.Map(map.value, options) 

  // geocoder로 주소를 통해 좌표 값 찾기
  const geocoder = new kakao.maps.services.Geocoder();
  const bounds = new kakao.maps.LatLngBounds()

  /**
   * addressList
   * [
   *  {title: String, address: String},
   *  ...
   * ]
   */

  for (const address of props.addressList) {
    geocoder.addressSearch(address.address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
        initMarker(address.name, coords)
        bounds.extend(coords)
        setBounds(bounds)
      }
    })
  }
}

// 사용할 kakao script init => index.html에 추가하지 않고 여기서 추가.
const initScript = () => {
  if (!window.kakao || !window.kakao.maps) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    const key = import.meta.env.VITE_KAKAO_MAP_API_KEY
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${key}&libraries=services`
    script.addEventListener('load', () => {
      kakao.maps.load(() => {
        initMap()
      })
    })
    document.head.appendChild(script)
  } else {
    initMap();
  }
}

onMounted(() => {
  initScript();
})
onUpdated(()=>{
  initMap();
})

</script>
<style scoped lang="scss">
.map-box {
  width: 100%;
  height: 100%;
  min-height:300px;
}
</style>
