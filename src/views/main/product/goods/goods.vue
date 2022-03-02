<template>
  <find-table :findTableConfig="findTableConfig" ></find-table>
  <page-content :contentTableConfig="contentTableConfig" pageName="goods">
    <template #image="scope">
      <el-image
        :src="scope.row.imgUrl"
        :fit="fill"
        style="width: 60px; height: 60px"
        :preview-src-list="[scope.row.imgUrl]"
        lazy
      ></el-image>
    </template>
  </page-content>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import findTable from "@/components/findTable/find-Table.vue";
import pageContent from "@/components/pageContent/page-content.vue";

import findTableConfig from "./config/findTableConfig";
import contentTableConfig from "./config/contentTableConfig";

export default defineComponent({
  name: 'goods',
  components: {
    findTable,
    pageContent
  },
  setup() {
    return {findTableConfig, contentTableConfig}
  }
})
</script>

<style scoped></style>
