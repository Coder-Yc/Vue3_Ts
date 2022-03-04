<template>
  <YcForm
      :findTableConfig="findTableConfig"
      v-model="modelValue"
    >
      <template #header>
        <h2>查找</h2>
      </template>
      <template #footer>
           <el-button type="primary" icon="el-icon-search" round @click="clickSearchcontent">搜索</el-button>
           <el-button icon="el-icon-refresh" round @click="cliclClearContent" >重置</el-button>
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
  emits:['resetContent','searchContent'],
  setup (props, {emit}) {

    const result = props.findTableConfig?.formItms ?? []
    const fixedFormData: any = {}
    for(const item of result) {
      fixedFormData[item.fixed] =''
    }
    const modelValue = ref(fixedFormData)
    //点击搜索按钮
    const clickSearchcontent = () => {
      emit('searchContent', modelValue.value)
    }
    //点击重置按钮
    const cliclClearContent = () => {

        // modelValue.value[`${item}`] = fixedFormData[item]
      modelValue.value = fixedFormData
      emit('resetContent')
    }
    return {cliclClearContent, modelValue, clickSearchcontent}
  }
})
</script>

<style scoped>

</style>