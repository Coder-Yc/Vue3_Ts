<template>
  <div class="user">
    <Ycform
      :formItems="formItms"
      :labelWith="labelWith"
      :ItemStyle="ItemStyle"
      :formData="formData"

    >
      <template #header>
        <h2>查找</h2>
      </template>
      <template #footer>

           <el-button type="primary" icon="el-icon-search" round>搜索</el-button>
           <el-button icon="el-icon-refresh" round>重置</el-button>

      </template>
    </Ycform>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Ycform from '@/baseUi/index'
import { IFormItem } from '@/baseUi/cpns/types'

export default defineComponent({
  name: 'user',
  components: {
    Ycform
  },
  setup() {
    const formItms: IFormItem[] = [
      {
        fixed: 'name',
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        fixed: 'password',
        type: 'password',
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        fixed: 'sports',
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择你喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football' }
        ]
      },
      {
        fixed: 'createtime',
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请选择创建时间的范围',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    const labelWith = '120px'
    const ItemStyle = { padding: '10px 40px' }

    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formItms, labelWith, ItemStyle, formData }
  }
})
</script>

<style scoped></style>
