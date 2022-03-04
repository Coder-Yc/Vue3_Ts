<template>
  <div class="user">
    <find-table
        :findTableConfig='findTableConfig'
        @searchContent="searchContent"
        @resetContent='resetContent'
    >
    </find-table>
    <page-content
        :contentTableConfig="contentTableConfig"
        pageName="users"
        ref="pageContentRef"
        :clickChangeButton="centerDialogVisible"
        @update:clickChangeButton="fillUserInfo"
        @update:createChangeButton="createUserInfo"
    >
    </page-content>
    <yc-dialog
        :modelValue="centerDialogVisible"
        @update:modelValue="centerDialogVisible = false"
        :dialogConfig="dialogConfig"
        :userInfo="userinfo"
    >
    </yc-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/pageContent/page-content.vue'
import findTable from '@/components/findTable/find-Table.vue'
import YcDialog from "@/components/Ycdialog/dialog.vue";

import contentTableConfig from './config/contentTableConfig'
import findTableConfig from './config/findTableConfig'
import dialogConfig from "./config/dialogConfig";

import { usePageSearch} from "@/hooks/usePageConten";
import { useDialogContent } from "@/hooks/usedialogContent";

export default defineComponent({
  name: 'user',
  components: {
    findTable,
    pageContent,
    YcDialog
  },
  setup() {


    //处理密码框是否存在
    //修改按钮
    const editCallback = () => {
      for(const item of dialogConfig.formItms) {
        if(item.fixed === 'password') {
          item.isHidden = true
        }
      }
    }
    //新建按钮
    const newCallback = () => {
      for(const item of dialogConfig.formItms) {
        if(item.fixed === 'password') {
          item.isHidden = false
        }
      }
    }

    //tableContent
    const [pageContentRef, searchContent, resetContent] = usePageSearch()
    //dialog
    const [centerDialogVisible, fillUserInfo, createUserInfo, userinfo] = useDialogContent(editCallback, newCallback)



    return {
      findTableConfig,
      contentTableConfig,
      pageContentRef,
      searchContent,
      resetContent,
      dialogConfig,
      centerDialogVisible,
      fillUserInfo,
      createUserInfo,
      userinfo
    }
  }
})
</script>

<style scoped>

</style>
