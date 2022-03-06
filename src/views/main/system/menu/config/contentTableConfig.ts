const contentTableConfig = {
  propList: [
    {prop: 'name', label: '菜单名称', width: '150', scopeName:'name' },
    {prop: 'sort', label: '等级', width: '150' },
    {prop: 'url', label: '路径', width: '150' },
    {prop: 'type', label: '菜单类型', width: '150', scopeName:'type' },
    {prop: 'createAt', label: '创建时间', scopeName:'createAt'},
    {prop: 'updateAt', label: '更新时间', scopeName:'updateAt'},
  ],
  // showIndex: true,
  title: '部门列表',
  path: 'department',
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
export default contentTableConfig