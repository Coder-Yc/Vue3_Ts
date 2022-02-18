<template>
  <div class="form">
    <el-form :label-width="labelWith">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col :span="spanFixed">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input :show-password="item.password" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select style="width: 100%" :placeholder="item.placeholder">
                  <el-option
                    v-for="option in item.options"
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
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from './types'

export default defineComponent({
  props: {
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

  setup() {
    return {}
  }
})
</script>

<style scoped>
.form {
  padding-top: 22px;
}
</style>
