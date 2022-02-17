import {IForm, IFormItem} from '@/baseUi/cpns/types.ts'
export const SearchFormConfig: IForm {
  formItms: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择你喜欢的运动',
      options: [
        { title: '篮球', value: 'basketball' },
        { title: '足球', value: 'football' }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间的范围',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWith = '120px',
  ItemStyle = { padding: '10px 40px' },
  spanFixed = 8
}