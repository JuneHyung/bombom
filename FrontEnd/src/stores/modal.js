// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore({
  id: 'modal-store',
  state:() =>{
    return{
      isOpen: false,
    }
  },
  actions:{
    toogleIsOpen(flag){
      this.isOpen=flag
    }
  }
})
