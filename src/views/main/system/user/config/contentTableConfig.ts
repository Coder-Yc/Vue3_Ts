const contentTableConfig = {
  propList: [
      {prop: 'name', label: '用户名', width: '150', scopeName:'name' },
      {prop: 'realname', label: '真实姓名', width: '150', scopeName:'realname' },
      {prop: 'enable', label: '状态', width: '150', scopeName:'enable'},
      {prop: 'cellphone', label: '电话号码', width: '150', scopeName:'cellphone' },
      {prop: 'createAt', label: '创建时间', scopeName:'createAt'},
      {prop: 'updateAt', label: '更新时间', scopeName:'updateAt'},
      {label: '操作', width:'140', scopeName:'operation'}
  ],
  showIndex : true,
  title : "用户列表",
  path: "users"
}
export default contentTableConfig