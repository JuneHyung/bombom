<template>
  <div class="modal-outter-wrap" v-if="modalStore.isOpen">
    <div class="modal-inner-wrap">
      <div class="modal-header-wrap">
        <slot name="header">
          <h1>header</h1>
        </slot>
      </div>
      <div class="modal-content-wrap">
        <slot></slot>
      </div>
      <div class="modal-footer-wrap">
        <slot name="footer">
          <button class="common-button" @click=closeModal>확인</button>
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {useModalStore} from '@/stores/modal'
const modalStore = useModalStore();

const closeModal = () =>{
  modalStore.toogleIsOpen(false);
}
</script>
