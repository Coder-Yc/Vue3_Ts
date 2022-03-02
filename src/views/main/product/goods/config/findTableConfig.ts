const findTableConfig = {
  formItms:[
      {
        fixed: 'name',
        type: 'input',
        label: '商品名称',
        placeholder: '请输入商品名称',
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
      {
        fixed: 'createAt',
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

}
export default findTableConfig