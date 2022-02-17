<template>
  <div class="form">
    <el-form>
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col>
            <el-form-item :label="item.label">
              <el-input :placeholder="item.placeholder">
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
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>
