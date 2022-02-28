<template>
  <YcForm
      :formItems="findTableConfig.formItms"
      :labelWith="findTableConfig.labelWith"
      :ItemStyle="findTableConfig.ItemStyle"
      :formData="findTableConfig.formData.value"

    >
      <template #header>
        <h2>查找</h2>
      </template>
      <template #footer>
           <el-button type="primary" icon="el-icon-search" round>搜索</el-button>
           <el-button icon="el-icon-refresh" round>重置</el-button>
      </template>
    </YcForm>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {YcForm} from '@/baseUi/index'
import { IFormItem } from '@/baseUi/cpns/types'

export default defineComponent({
  props: {
    findTableConfig: {
      type: Object as PropType<IFormItem>,
      require: true
    },
  },
  components: {
      YcForm
  },
  setup (props) {



    return {}
  }
})
</script>

<style scoped>

</style>