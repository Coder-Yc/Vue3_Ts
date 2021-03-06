type IFormtype = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  type: IFormtype
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWith?: String
  itemStyle: any
  spanFixed: any
}
