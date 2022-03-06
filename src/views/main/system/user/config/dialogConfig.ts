const dialogConfig = {
  formItms:[
    {
      fixed: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
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
      fixed: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码',
      options: [],
      isHidden: true
    },
    {
      fixed: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
      options: []
    },
    {
      fixed: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: [] as any,

    },
    {
      fixed: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: [] as any,

    }
    ],
  labelWith :'70px',
  ItemStyle : { padding: '10px 50px' },
  title: '编辑',
}
export default dialogConfig