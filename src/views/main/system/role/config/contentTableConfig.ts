const contentTableConfig = {
  propList: [
      {prop: 'name', label: '角色名', width: '150', scopeName:'name' },
      {prop: 'intro', label: '职能', width: '150', scopeName:'intro' },
      {prop: 'createAt', label: '创建时间', scopeName:'createAt'},
      {prop: 'updateAt', label: '更新时间', scopeName:'updateAt'},
      {label: '操作', width:'140', scopeName:'operation'}
  ],
  showIndex : true,
  title : "角色列表",
}
export default contentTableConfig