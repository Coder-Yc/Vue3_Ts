<template>
  <div class="user">
    <find-table :findTableConfig='findTableConfig' @searchContent="searchContent" @resetContent='resetContent'></find-table>
    <page-content :contentTableConfig="contentTableConfig" pageName="users" ref="pageContentRef"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/pageContent/page-content.vue'
import findTable from '@/components/findTable/find-Table.vue'

import contentTableConfig from './config/contentTableConfig'
import findTableConfig from './config/findTableConfig'

import { usePageSearch } from "@/hooks/usePageConten";


export default defineComponent({
  name: 'user',
  components: {
    findTable,
    pageContent
  },
  setup() {

    const [pageContentRef, searchContent, resetContent] = usePageSearch()

    return { findTableConfig, contentTableConfig, pageContentRef, searchContent, resetContent}
  }
})
</script>

<style scoped>

</style>
