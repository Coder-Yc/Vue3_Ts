<template>
  <div class="form">
    <el-form class="">
      <el-row :gutter="30">
        <template v-for="item of formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <el-input />
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
