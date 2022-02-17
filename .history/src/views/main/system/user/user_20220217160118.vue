<template>
  <div class="user">
    <Ycform />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        label: '密码',
        placeholder: '请输入密码'
      },
      {
        label: '喜欢的运动',
        placeholder: '请选择你喜欢的运动'
      },
      {
        label: '密码',
        placeholder: '请输入密码'
      }
    ]
    return {}
  }
})
</script>

<style scoped></style>
