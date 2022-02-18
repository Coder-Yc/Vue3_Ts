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
import { defineComponent, PropType } from 'vue'
import { breadcrumbs } nameMapToMenufrom '@/utils/mapMenusToRouter'
import router from 'vue-router'
export default defineComponent({
  setup() {
    console.log()

    return { breadcrumbs }
  }
})
</script>

<style scoped></style>
