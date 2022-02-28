const contentTableConfig = {
  propList: [
    {prop: 'name', label: '菜单名称', width: '150', scopeName:'name' },
    {prop: 'type', label: '菜单登记', width: '150', scopeName:'type' },
    {prop: 'createAt', label: '创建时间', scopeName:'createAt'},
    {prop: 'updateAt', label: '更新时间', scopeName:'updateAt'},
  ],
  showIndex: true,
  title: '部门列表',
  path: 'department'
}
export default contentTableConfig