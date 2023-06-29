import useModalStore from 'src/stores/store.js'
const modalStore = useModalStore();
export const openModal = () =>{
  modalStore.toogleIsOpen(true);
}
export const closeModal = () =>{
  modalStore.toogleIsOpen(false);
}