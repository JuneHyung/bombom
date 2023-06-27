import { getFetch } from ".";

const url = import.meta.env.VITE_BACKEND_API_URL;
const baseUrl = `${url}/menus`;
export const getAllMenuTypes = async () =>{
  try{
    const res = await getFetch(baseUrl)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const getMenusByMenuType = async (menuType) =>{
  console.log(menuType)
  try{
    const res = await getFetch(baseUrl, menuType)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}