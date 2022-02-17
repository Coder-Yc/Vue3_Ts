<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">系统总览</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">核心技术</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from 'vue-router'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
