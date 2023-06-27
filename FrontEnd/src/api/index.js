import _ from 'lodash';
const headers = {'Content-Type': 'application/json'}
const defaultOptions = (method) =>{
  return {
    method,
    headers 
  }
}

export const getFetch = async (url, params) => {
  const options = defaultOptions('GET')
  if(params===undefined || params===null){
    return await fetch(`${url}`, options)
  }else{
    return await fetch(`${url}/${params}`, options)
  }
}

export const postFetch = async (url, body) => {
    const options = _.merge(defaultOptions('POST'), {body})
    return await fetch(`${url}`, options)
}

export const putFetch = async (url, body) => {
    const options = _.merge(defaultOptions('UPDATE'), {body})
    return await fetch(`${url}`, options)
}

export const deleteFetch = async (url, params) => {
  const options = defaultOptions('DELETE')
  if(params===undefined || params===null){
    return await fetch(`${url}`, options)
  }else{
    return await fetch(`${url}/${params}`, options)
  }
}