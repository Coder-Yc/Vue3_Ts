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
        :defaultValue="defaultValue"
    >
    </yc-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUpdate, watch} from 'vue'
import { useStore } from "vuex";

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
    //发送网络请求（角色/部门）
    const store = useStore()
    store.dispatch('getRolesListAction', {
      pageName: '/role',
      queryInfo: {
        offset: 0,
        size: 100
      }
    })
    store.dispatch('getDepartmentListAction', {
      pageName: '/department',
      queryInfo: {
        offset: 0,
        size: 100
      }
    })
    onBeforeUpdate(() => {
      //获取角色数据
      const roleList = computed(() => store.state.roles)
      const roleItem = dialogConfig.formItms.find((item) => {
        return item.fixed === 'roleId'
      })
      roleItem!.options = roleList.value.map((item: { name: any; id: any; }) => {
        return {title: item.name, value: item.id}
      })
      //获取部门数据
      const departmentList = computed(() => store.state.department)
      const departmentItem = dialogConfig.formItms.find((item) => {
        return item.fixed === 'departmentId'
      })
      departmentItem!.options = departmentList.value.map((item: { name: any; id: any; }) => {
        return {title: item.name, value: item.id}
      })

    })


    //tableContent
    const [pageContentRef, searchContent, resetContent] = usePageSearch()
    //dialog
    const [centerDialogVisible, fillUserInfo, createUserInfo, defaultValue] = useDialogContent(editCallback, newCallback)
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
      defaultValue,

    }
  }
})
</script>

<style scoped>

</style>
