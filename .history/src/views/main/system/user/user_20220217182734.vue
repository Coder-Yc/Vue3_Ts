<template>
  <div class="user">
    <Ycform
      :formItems="formItms"
      :labelWith="labelWith"
      :ItemStyle="ItemStyle"
    />
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
    return { formItms, labelWith, ItemStyle }
  }
})
</script>

<style scoped></style>
