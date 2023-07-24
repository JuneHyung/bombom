// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useModalStore = defineStore('modal-store', ()=>{
  const isOpen = ref(false);
  const modalStatus = ref('edit');
  const toggleIsOpen = async (flag: boolean)=>{
    isOpen.value = flag;
  }
  const getModalStatus = () => modalStatus.value;

  const setModalStatus = async (status: string) => {
    modalStatus.value = status;
  }
  
  return {
    isOpen,
    toggleIsOpen,
    getModalStatus,
    setModalStatus
  }
})
