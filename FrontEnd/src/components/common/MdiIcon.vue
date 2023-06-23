<template>
  <SvgIcon type="mdi" :path="path" class="cursor-pointer"></SvgIcon>
</template>
<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEyeOutline, mdiPencil, mdiTrashCanOutline, mdiAlertDecagramOutline } from '@mdi/js'
import { computed} from 'vue';
const props = defineProps({
  name: String,
})

const path = computed(()=>{
  if(props.name ==='mdi-eye-outline') return mdiEyeOutline;
  else if(props.name ==='mdi-pencil') return mdiPencil;
  else if(props.name ==='mdi-trash-can-outline') return mdiTrashCanOutline;
  else return mdiAlertDecagramOutline;
});
</script>