import type { TextInput } from "./common";

export interface UserInfo{
  userId: string,
  userName: string,
  userEmail: string,
  userAddress: string,
  userTel: string,
  isAdmin: boolean,
  joinDate: string,
}

export interface LoginFormData {
  id: string,
  password: string,
}

export interface UserFormData {
  userId: TextInput,
  userPw: TextInput,
  userName: TextInput,
  userEmail: TextInput,
  userAddress: TextInput,
  userTel: TextInput,
}

export type UserInfoBody = {
  userId: string,
  userPw: string,
  userName: string,
  userEmail: string,
  userAddress: string,
  userTel: string,
}