import { deleteFetch, getFetch, postFetch, putFetch } from ".";

const url = import.meta.env.VITE_BACKEND_API_URL;

export const getAllNotices = async () =>{
  try{
    const res = await getFetch(`${url}/notices`)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const getNoticeById = async (noticeId) =>{
  try{
    const res = await getFetch(`${url}/notices`, noticeId)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const postNotice = async (body) =>{
  try{
    const res = await postFetch(`${url}/notices`, body)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const putNoticeById = async (body) =>{
  try{
    const res = await putFetch(`${url}/notices`, body)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}

export const deleteNoticeById = async (noticeId) =>{
  console.log('api')
  console.log(noticeId)
  try{
    const res = await deleteFetch(`${url}/notices`, noticeId)
    console.log(res)
    const data = await res.json();
    return data;

  }catch(err){
    console.error(`Error : ${err}`)
    throw err;
  }
}
