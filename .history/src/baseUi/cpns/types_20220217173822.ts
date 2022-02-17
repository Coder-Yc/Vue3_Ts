type IFormtype = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  type: IFormtype
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
}
