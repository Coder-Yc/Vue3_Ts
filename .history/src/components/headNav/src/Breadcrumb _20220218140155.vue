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
import { nameMapToMenu } from '@/utils/mapMenusToRouter'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const path = useRoute().path
    const menu = useStore().state.login.useM
    // const breadcrumbs = nameMapToMenu(menu, path)
    // console.log(breadcrumbs)

    // return { breadcrumbs }
  }
})
</script>

<style scoped></style>
