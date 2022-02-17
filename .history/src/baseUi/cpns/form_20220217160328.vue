<template>
  <div class="form">
    <el-form>
      <el-row>
        <template>
          <el-col >
            <template v-for="item in formItem"></template>
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
