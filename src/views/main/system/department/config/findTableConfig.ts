const findTableConfig = {
  formItms:[
    {
        fixed: 'departmentId',
        type: 'input',
        label: '部门',
        placeholder: '请输入部门名称',
        options: []
      },
      {
        fixed: 'name',
        type: 'input',
        label: '领导名称',
        placeholder: '请输入领导名称',
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