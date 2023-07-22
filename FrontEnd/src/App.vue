
<template>
  <div class="app-wrapper">
    <NavHeader />
    <RouterView />
    <NavFooter />
    
  </div>
</template>
<script setup>
import NavHeader from '@/components/common/header/NavHeader.vue';
import NavFooter from '@/components/common/footer/NavFooter.vue';
import { onMounted } from 'vue';
const initScript = () => {
  if (!window.kakao || !window.kakao.maps) {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    const key = import.meta.env.VITE_KAKAO_MAP_API_KEY
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${key}&libraries=services`
    document.head.appendChild(script)
  }
}
onMounted(()=>{
  initScript();
})
</script>
