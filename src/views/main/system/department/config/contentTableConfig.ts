const contentTableConfig = {
  propList: [
    {prop: 'name', label: '部门', width: '150', scopeName:'name' },
    {prop: 'leader', label: '领导名称', width: '150', scopeName:'leader' },
    {prop: 'createAt', label: '创建时间', scopeName:'createAt'},
    {prop: 'updateAt', label: '更新时间', scopeName:'updateAt'},

  ],
  showIndex: true,
  title: '部门列表',
  path: 'department'
}
export default contentTableConfig