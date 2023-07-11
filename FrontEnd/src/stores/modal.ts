// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useModalStore = defineStore('modal-store', ()=>{
  const isOpen = ref(false);

  function toggleIsOpen(flag: boolean){
    isOpen.value = flag;
  }
  return {
    isOpen,toggleIsOpen
  }
})
