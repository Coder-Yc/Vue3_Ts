
const dialogConfig = {
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

    ],
    labelWith :'120px',
    ItemStyle : { padding: '10px 40px' },
    spanFixed: {span: 24}

}
export default dialogConfig