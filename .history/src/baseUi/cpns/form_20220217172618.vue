<template>
  <div class="form">
    <el-form label-width="100px">
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
                <el-select />
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
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped></style>
