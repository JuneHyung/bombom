import {useModalStore} from 'src/stores/modal'
const modalStore = useModalStore();
export const openModal = () =>{
  modalStore.toogleIsOpen(true);
}
export const closeModal = () =>{
  modalStore.toogleIsOpen(false);
}