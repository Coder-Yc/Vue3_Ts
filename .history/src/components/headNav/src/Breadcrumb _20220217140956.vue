<template>
  <div class="breadcrumb" :separator-icon="ArrowRight">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
