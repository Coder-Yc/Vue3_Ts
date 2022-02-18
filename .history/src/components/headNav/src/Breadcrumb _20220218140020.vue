<template>
  <div class="breadcrumb"></div>
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
    const breadcrumbs = nameMapToMenu(menu, path)
    console.log(breadcrumbs)

    return {}
  }
})
</script>

<style scoped></style>
