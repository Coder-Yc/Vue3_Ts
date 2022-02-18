<template>
  <div class="form">
    <div>
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWith">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col v-bind="spanFixed">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :show-password="item.type === 'password'"
                  v-model="formDataCopy[`${item.fixed}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-model="formDataCopy[`${item.fixed}`]"
                >
                  <el-option
                    v-for="option in item.options "
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  :start-placeholder="item.otherOptions.startPlaceholder"
                  :end-placeholder="item.otherOptions.endPlaceholder"
                  :type="item.otherOptions.type"
                  v-model="formDataCopy[`${item.fixed}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType ,ref, watch } from 'vue'
import { IFormItem } from './types'

export default defineComponent({
  props: {
    formData: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWith: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: { padding: '10px 40px' }
    },
    spanFixed: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  // emits:['update:formData'],
  setup(props, {emit}) {
    const formDataCopy = ref({...props.formData})
    // watch(formDataCopy, (newValue) => emit('update:formData', newValue), {deep: true})

    return {formDataCopy}
  }
})
</script>

<style scoped>
.form {
  padding-top: 22px;
}
.footer {
  justify-content: flex-end;
  display: flex;
}
</style>

