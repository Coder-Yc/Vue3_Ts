<template>
  <YcForm
      :formItems="findTableConfig.formItms"
      :labelWith="findTableConfig.labelWith"
      :ItemStyle="findTableConfig.ItemStyle"
      v-model="modelValue"
    >
      <template #header>
        <h2>查找</h2>
      </template>
      <template #footer>
           <el-button type="primary" icon="el-icon-search" round>搜索</el-button>
           <el-button icon="el-icon-refresh" round @click="cliclClearContent" @formData="formData">重置</el-button>
      </template>
    </YcForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {YcForm} from '@/baseUi/index'

export default defineComponent({
  props: {
    findTableConfig: {
      type: Object ,
      require: true
    },
  },
  components: {
      YcForm
  },
  setup (props) {
    const result = props.findTableConfig?.formItms ?? []
    const fixedFormData: any = {}
    for(const item of result) {
      fixedFormData[item.fixed] =''
    }

  const modelValue = ref(fixedFormData)


  const cliclClearContent = () => {
    for(const item in modelValue.value) {
      // modelValue.value[`${item}`] = fixedFormData[item]
      modelValue.value = fixedFormData
    }

  }
    return {cliclClearContent, modelValue}
  }
})
</script>

<style scoped>

</style>