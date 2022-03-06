<template>
  <find-table
    :findTableConfig='findTableConfig'
    @searchContent="searchContent"
    @resetContent='resetContent'
  >
  </find-table>

  <page-content
    :contentTableConfig='contentTableConfig'
    pageName="role"
  >
  </page-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/pageContent/page-content.vue'
import findTable from '@/components/findTable/find-Table.vue'


import findTableConfig from './config/findTableConfig'
import  contentTableConfig from './config/contentTableConfig'

import { usePageSearch} from "@/hooks/usePageConten";

export default defineComponent({
  name: 'role',
  components: {
    findTable,
    pageContent
  },
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
