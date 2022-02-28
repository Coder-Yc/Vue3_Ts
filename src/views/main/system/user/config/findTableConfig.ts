import { ref } from "vue";
const findTableConfig = {
  formItms:[
      {
        fixed: 'name',
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名',
        options: []
      },
      {
        fixed: 'password',
        type: 'password',
        label: '密码',
        placeholder: '请输入密码',
        options: []
      },
      {
        fixed: 'sports',
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择你喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        fixed: 'createtime',
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请选择创建时间的范围',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        },
        options: []
      }
    ],
    labelWith :'120px',
    ItemStyle : { padding: '10px 40px' },
    formData : ref({
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
}
export default findTableConfig