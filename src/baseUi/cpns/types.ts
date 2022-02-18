type IFormtype = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  fixed: string
  type: IFormtype
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}
