type IFormtype = 'input' | 'password' | 'select' | datapicker
export interface IFormItem {
  type: IFormtype
  label: string
  rules?: any[]
  placeholder?: any
}
