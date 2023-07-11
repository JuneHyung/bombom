import type { LoginRequestBody, LoginResponse, SignupRequestBody, UpdateRequestBody,  } from "@/types/user";
import { deleteFetch, postFetch, putFetch } from ".";
import type { CustomResponse } from "@/types/common";

const url = import.meta.env.VITE_BACKEND_API_URL;

export const postUser = async (body: SignupRequestBody): Promise<CustomResponse> =>{
  try{
    const res = await postFetch(`${url}/users/signup`, body)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const postUserLogin = async (body: LoginRequestBody):Promise<LoginResponse> =>{
  try{
    const res = await postFetch(`${url}/users/login`, body)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const postCheckPassword = async (body: LoginRequestBody): Promise<CustomResponse> => {
  try{
    const res = await postFetch(`${url}/users/checkPw`, body)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const putUserInfo = async (body: UpdateRequestBody): Promise<CustomResponse> => {
  try{
    const res = await putFetch(`${url}/users/userInfo`, body)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const deleteUserInfo = async (params: string): Promise<CustomResponse> => {
  try{
    const res = await deleteFetch(`${url}/users`, params)
    const data = await res.json();
    return data;
  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}