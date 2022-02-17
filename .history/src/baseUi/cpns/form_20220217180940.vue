<template>
  <div class="form">
    <el-form :label-width="labelWith">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label" class="elformItem">
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
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.elformItem {
  padding-top: 22px;
}
</style>
