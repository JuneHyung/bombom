export interface TextInput{
  value: string,
  placeholder?: string,
  disabled?: boolean,
  label?: string,
  type?: string
}

export interface CustomResponse {
  code: number,
  message: string,
}