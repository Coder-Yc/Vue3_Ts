<template>
  <page-content :contentTableConfig="contentTableConfig" pageName="menu"></page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from "@/components/pageContent/page-content.vue";
import  contentTableConfig  from "./config/contentTableConfig";

export default defineComponent({
  components: {
    pageContent
  },
  // name: 'menu',
  setup() {
    return {contentTableConfig}
  }
})
</script>

<style scoped></style>
