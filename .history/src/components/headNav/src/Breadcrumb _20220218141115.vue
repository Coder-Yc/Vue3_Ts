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
import { defineComponent, computed } from 'vue'
import { nameMapToMenu } from '@/utils/mapMenusToRouter'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const breadcrumbs = computed(() => {
      const path = useRoute().path
      const menu = store.state.login.userM
      return nameMapToMenu(menu, path)
    }

    return { breadcrumbs }
  }
}
})
</script>

<style scoped></style>
