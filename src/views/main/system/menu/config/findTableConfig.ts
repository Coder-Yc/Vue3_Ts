const findTableConfig = {
  formItms:[
    {
        fixed: 'name',
        type: 'input',
        label: '菜单名称',
        placeholder: '请输入菜单名称',
        options: []
      },
      {
        fixed: 'sort',
        type: 'input',
        label: '菜单等级',
        placeholder: '请输入菜单等级',
        options: []
      },
      {
        fixed: 'url',
        type: 'input',
        label: '菜单路径',
        placeholder: '请输入菜单路径',
        options: []
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