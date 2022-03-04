<template>
  <el-dialog
    v-model="visable"
    :close-on-press-escape="false"
    :show-close="false"
    title="新建用户"
    width="50%"

    destroy-on-close
    center
  >
    <yc-form :findTableConfig="dialogConfig" v-model="modelValue"></yc-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="Cancel">取消</el-button>
        <el-button type="primary">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import YcForm from "@/baseUi/cpns/form.vue";


export default defineComponent({
  props: {
    centerDialogVisible: {
      type: Boolean,
      default:() => {return false}

    },
    dialogConfig: {
      type: Object,
      default: {}
    }
  },
  components: {
    YcForm
  },
  emits:['update:modelValue'],
  setup (props, {emit}) {
    console.log(props.dialogConfig);

    const visable = ref({visable: props.centerDialogVisible})
    const Cancel = () => {
      emit('update:modelValue')
    }
    const result = props.dialogConfig?.formItms ?? []
    const fixedFormData: any = {}
    for(const item of result) {
      fixedFormData[item.fixed] =''
    }
    const modelValue = ref(fixedFormData)

    const findTableConfig = props.dialogConfig
    return {Cancel, visable, findTableConfig, modelValue}
  }
})
</script>

<style scoped>

</style>