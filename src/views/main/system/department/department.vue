<template>
  <page-content :contentTableConfig='contentTableConfig' pageName="department"></page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from "@/components/pageContent/page-content.vue";
import  contentTableConfig  from "./config/contentTableConfig";

export default defineComponent({
  name: 'department',
  components: {
    pageContent
  },
  setup() {

    return {contentTableConfig}
  }
})
</script>

<style scoped></style>
