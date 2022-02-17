<template>
  <div class="form">
    <el-form>
      <el-row>
        <template>
          <el-col >
            <template v-for="item of formItems">
              <el-form-item :label="item.label">
              <el-input>2</el-input>
            </el-form-item>
            </template>
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
