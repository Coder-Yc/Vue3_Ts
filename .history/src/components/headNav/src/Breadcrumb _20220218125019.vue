<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item of breadcrumbs" :key="item">
        <el-breadcrumb-item>{{ item }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from 'vue-router'
export default defineComponent({
  setup() {
    const breadcrumbs = []

    return { breadcrumbs }
  }
})
</script>

<style scoped></style>
