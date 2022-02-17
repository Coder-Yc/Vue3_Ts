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
        rules: [],
        placeholder: ''
      }
    ]
    return {}
  }
})
</script>

<style scoped></style>
