<template>
  <div class="user">
    <find-table :findTableConfig='findTableConfig'></find-table>
    <page-content :contentTableConfig="contentTableConfig" pageName="users"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/pageContent/page-content.vue'
import findTable from '@/components/findTable/find-Table.vue'

import contentTableConfig from './config/contentTableConfig'
import findTableConfig from './config/findTableConfig'


export default defineComponent({
  name: 'user',
  components: {
    findTable,
    pageContent
  },
  setup() {

    return { findTableConfig, contentTableConfig}
  }
})
</script>

<style scoped>

</style>
