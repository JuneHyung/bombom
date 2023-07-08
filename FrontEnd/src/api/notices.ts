import type { Notice, NoticeList, postNoticeBody, putNoticeBody } from "@/types/notices";
import { deleteFetch, getFetch, postFetch, putFetch } from ".";
import type { CustomResponse } from "@/types/common";
const url = import.meta.env.VITE_BACKEND_API_URL;

export const getAllNotices = async (): Promise<NoticeList> =>{
  try{
    const res = await getFetch(`${url}/notices`)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const getNoticeById = async (noticeId: number): Promise<Notice> =>{
  try{
    const res = await getFetch(`${url}/notices`, noticeId)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const postNotice = async (body: postNoticeBody): Promise<CustomResponse> =>{
  try{
    const res = await postFetch(`${url}/notices`, body)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const putNoticeById = async (body: putNoticeBody): Promise<CustomResponse> =>{
  try{
    const res = await putFetch(`${url}/notices`, body)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const deleteNoticeById = async (noticeId: number): Promise<CustomResponse> =>{
  try{
    const res = await deleteFetch(`${url}/notices`, noticeId)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}
