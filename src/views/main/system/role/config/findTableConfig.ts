const findTableConfig = {
  formItms:[
      {
        fixed: 'name',
        type: 'input',
        label: '角色名',
        placeholder: '请输入角色名',
        options: []
      },
      {
        fixed: 'intro',
        type: 'input',
        label: '职能',
        placeholder: '请输入职能',
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