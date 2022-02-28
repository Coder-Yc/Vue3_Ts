<template>
  <pageContent :contentTableConfig='contentTableConfig' pageName="role"></pageContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/pageContent/page-content.vue'
import  contentTableConfig from './config/contentTableConfig'
export default defineComponent({
  name: 'role',
  components: {
    pageContent
  },
  setup() {

    return {contentTableConfig}
  }
})
</script>

<style scoped></style>
