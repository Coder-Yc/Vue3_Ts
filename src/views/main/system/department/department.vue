<template>
  <find-table
    :findTableConfig='findTableConfig'
    @searchContent="searchContent"
    @resetContent='resetContent'
  >
  </find-table>
  <page-content :contentTableConfig='contentTableConfig' pageName="department"></page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import findTable from '@/components/findTable/find-Table.vue'
import pageContent from "@/components/pageContent/page-content.vue";

import findTableConfig from './config/findTableConfig'
import  contentTableConfig  from "./config/contentTableConfig";
import { usePageSearch} from "@/hooks/usePageConten";

export default defineComponent({
  components: {
    findTable,
    pageContent
  },
  // name: 'menu',
  setup() {
    const [pageContentRef, searchContent, resetContent] = usePageSearch()
    return {
      contentTableConfig,
      findTableConfig,
      pageContentRef,
      searchContent,
      resetContent
      }
  }
})
</script>

<style scoped></style>
