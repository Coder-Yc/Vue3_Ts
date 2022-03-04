<template>
  <el-dialog
    v-model="visable"
    :close-on-press-escape="false"
    :show-close="false"
    title="title"
    width="30%"
    destroy-on-close
    center
  >
    <yc-form
      :findTableConfig="dialogConfig"
      v-model="modelValue"
      :spanFixed="spanFixed"
    ></yc-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="canCel">取消</el-button>
        <el-button type="primary" @click="conFirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUpdate, watch} from 'vue'
import { useStore } from "vuex";
import YcForm from "@/baseUi/cpns/form.vue";


export default defineComponent({
  props: {
    centerDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogConfig: {
      type: Object,
      default: {}
    },
    userInfo: {
      type: Object,
      default: {}
    },
  },
  components: {
    YcForm
  },
  emits:['update:modelValue'],
  setup (props, {emit}) {
    const store = useStore()
    //取消按钮
    const visable = ref({visable: props.centerDialogVisible})
    const canCel = () => {
      emit('update:modelValue')
    }
    //确认按钮
    const conFirm = () => {
      store.dispatch('system/addButtonAction', modelValue)
      emit('update:modelValue')
    }
    //dialog布局
    const spanFixed = {
      span: 24
    }
    //form里的数据
    const result = props.dialogConfig?.formItms ?? []
    const fixedFormData: any = ref({})
    //监听userInfo数据让modelValue也发生改变
    watch(() => props.userInfo, (newValue) => { fixedFormData.value = newValue  })
    onBeforeUpdate(() => {
      for(const item of result) {
        Object.keys(props.userInfo).forEach(element => {
          if(element === item.fixed) {
            fixedFormData[item.fixed] = props.userInfo[element]
          }
        });
      }
    })

    const modelValue = ref(fixedFormData)

    return {canCel, conFirm, visable,modelValue ,spanFixed, fixedFormData}
  }
})
</script>

<style scoped>

</style>