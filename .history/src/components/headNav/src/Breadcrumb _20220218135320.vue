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
import { breadcrumbs, nameMapToMenu } from '@/utils/mapMenusToRouter'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const router = nameMapToMenu()

    return { breadcrumbs }
  }
})
</script>

<style scoped></style>
