import type { ShopList } from "@/types/shops";
import { getFetch } from ".";

const url = import.meta.env.VITE_BACKEND_API_URL;

export const getAllShops = async (): Promise<ShopList> =>{
  try{
    const res = await getFetch(`${url}/shops`)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const getShopsByLocName = async (locName: string): Promise<ShopList> =>{
  try{
    const res = await getFetch(`${url}/shops`, locName)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}