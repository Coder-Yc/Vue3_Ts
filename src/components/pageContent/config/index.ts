
const contentTableConfig = {
  formItms:[
    {
        fixed: 'id',
        type: 'input',
        label: 'ID',
        placeholder: '请输入ID',
        options: []
      },
      {
        fixed: 'name',
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名',
        options: []
      },
      {
        fixed: 'cellphone',
        type: 'input',
        label: '电话号码',
        placeholder: '请输入电话号码',
        options: []
      },
      {
        fixed: 'realname',
        type: 'input',
        label: '真实姓名',
        placeholder: '请输入真实姓名',
        options: []
      },
      {
        fixed: 'enable',
        type: 'select',
        label: '用户状态',
        placeholder: '请选择用户状态',
        options: [
          { title: '启用', value: '1' },
          { title: '禁用', value: '0' }
        ]
      },
    ],
    labelWith :'120px',
    ItemStyle : { padding: '10px 40px' },

}
export default contentTableConfig