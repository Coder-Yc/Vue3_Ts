type IFormtype = 'input' | 'password' | 'select' |
export interface IFormItem {
  type: IFormtype
  label: string
  rules?: any[]
  placeholder?: any
}
