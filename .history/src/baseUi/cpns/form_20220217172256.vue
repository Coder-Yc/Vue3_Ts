<template>
  <div class="form">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item of formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label" class="elformItem">
              <el-input />
              <template v-if="item.type === " </template>
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
