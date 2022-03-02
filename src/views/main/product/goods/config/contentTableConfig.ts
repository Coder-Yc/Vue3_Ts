const contentTableConfig = {
  propList: [
      {prop: 'name', label: '商品名称', width: '150' },
      {prop: 'oldPrice', label: '原价格', width: '80'},
      {prop: 'newPrice', label: '现价格', width: '80'},
      {prop: 'imgUrl', label: '商品图片', width: '150', scopeName:'image' },
      {prop: 'createAt', label: '创建时间', scopeName:'createAt'},
      {prop: 'updateAt', label: '更新时间', scopeName:'updateAt'},
      {label: '操作', width:'140', scopeName:'operation'}
  ],
  showIndex : true,
  title : "用户列表",
  path: "users"
}
export default contentTableConfig