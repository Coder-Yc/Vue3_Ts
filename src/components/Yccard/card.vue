<template>
  <div class="card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{title}}</span>
        </div>
      </template>
      <div class="item">
        <slot></slot>
      </div>
  </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup () {


    return {}
  }
})
</script>

<style scoped>

</style>