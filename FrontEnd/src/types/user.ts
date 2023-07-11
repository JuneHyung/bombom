import type { CustomResponse, TextInput } from "./common";
export interface User {
  id:number,
  userId: string,
  userPw: string,
  userName: string,
  userEmail: string,
  userAddress: string,
  userTel: string,
  isAdmin: boolean,
  joinDate: string,
}

export interface UserFormData {
  userId: TextInput,
  userPw: TextInput,
  userName: TextInput,
  userEmail: TextInput,
  userAddress: TextInput,
  userTel: TextInput,
}

export type LoginRequestBody = Pick<User, 'userId' | 'userPw'>
export type LoginFormData = Pick<UserFormData, 'userId' | 'userPw'>

export type SignupRequestBody = Omit<User, 'id'>
export type UpdateRequestBody = Omit<User, 'id' | 'isAdmin' | 'joinDate'>
export type UserInfo = Omit<User, 'id' | 'userPw'>

export interface LoginResponse extends CustomResponse {
  token: string
} 


