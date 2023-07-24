import { getAllMenuTypes, getMenusByMenuType } from '@/api/menus';
import type { MenuList } from '@/types/menus';
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useMenuStore = defineStore('menu-store', () => {

  const menuList: Ref<MenuList> = ref([])
  const menuTypeList: Ref<string[]> = ref([]);
  const curIdx = ref(0);
  const setAllMenuTypeList = async () =>{
    const data = await getAllMenuTypes();
    menuTypeList.value = data;
  }

  const setMenuListByMenuType = async (menuType: string) =>{
    const data = await getMenusByMenuType(menuType);
    menuList.value =data;
  }

  const changeCurIdx = (idx: number) =>{ 
    curIdx.value = idx
    console.log(menuTypeList.value[idx])
    setMenuListByMenuType(menuTypeList.value[idx]);
  };

  const getMenuList = ()=>menuList.value;
  const getMenuTypeList = ()=>menuTypeList.value;
  const getCurIdx = () => curIdx.value; 

  return {
    menuList,
    setAllMenuTypeList,
    setMenuListByMenuType,
    changeCurIdx,
    getMenuList,
    getMenuTypeList,
    getCurIdx
  }
})
