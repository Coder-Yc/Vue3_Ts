<template>
  <div class="form">
    <el-form>
      <el-row>
        <template>
          <el-col >
            <el-form-item label="Activity name">
              <el-input>2</el-input>
            </el-form-item>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {IFormItem} from './types'

export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>
