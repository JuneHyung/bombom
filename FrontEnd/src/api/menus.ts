import type { MenuList } from "@/types/menus";
import { getFetch } from ".";

const url = import.meta.env.VITE_BACKEND_API_URL;
const baseUrl = `${url}/menus`;

export const getAllMenuTypes = async (): Promise<string[]> =>{
  try{
    const res = await getFetch(baseUrl)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const getMenusByMenuType = async (menuType: string): Promise<MenuList> =>{
  try{
    const res = await getFetch(baseUrl, menuType)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}