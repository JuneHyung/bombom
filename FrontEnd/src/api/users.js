import { getFetch, postFetch } from ".";

const url = import.meta.env.VITE_BACKEND_API_URL;

export const getAllUser = async () =>{
  try{
    const res = await getFetch(`${url}/users`)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const postUser = async (body) =>{
  try{
    const res = await postFetch(`${url}/users/signup`, body)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const postUserLogin = async (body) =>{
  try{
    const res = await postFetch(`${url}/users/login`, body)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}
