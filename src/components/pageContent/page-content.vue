<template>
  <yc-table v-bind="contentTableConfig"
           :dataList="dataList"
           :dataListTotal="dataListTotal"
  >
    <template #headerOperation>
      <el-button type="primary" @click="createUserButton">新建用户</el-button>
    </template>
    <template #enable="scope">
      <el-button type="success" plain size="small">{{scope.row.enable}}</el-button>
    </template>
    <template #createAt="scope">
      <strong>{{$filters.formatTime(scope.row.createAt)}}</strong>
    </template>
    <template #updateAt="scope">
      <strong>{{$filters.formatTime(scope.row.updateAt)}}</strong>
    </template>
    <template #operation="scope">
        <div class="opation-button">
          <el-button type="danger" size="small" @click="clickDeleteUser(scope.row)">删除</el-button>
          <el-button type="info" size="small" @click="updateUserButton(scope.row)">编辑</el-button>
        </div>
    </template>
    <template
      v-for="item in restContentConfig"
      :key="item.prop"
      #[item.scopeName]='scope'
    >
      <template v-if="item.scopeName">
        <slot :name="item.scopeName" :row="scope.row"></slot>
      </template>
    </template>
  </yc-table>
</template>

<script lang="ts">
import { computed, defineComponent,ref} from 'vue'

import { useStore } from "vuex";

import YcTable from "@/baseUi/cpns/table.vue";
import YcForm from "@/baseUi/cpns/form.vue";
import YcDialog from "@/components/Ycdialog/dialog.vue";

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    },
  },
  components: {
    YcTable,
    YcForm,
    YcDialog
  },
  emits:['update:clickChangeButton', 'update:createChangeButton'],
  setup (props, {emit}) {
    const store = useStore()
    const getStoreContent = (queryinfo?: any) => {
      store.dispatch('system/getDataListAction',{
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10,
        ...queryinfo
      }
    })
    }
    getStoreContent()
    //拿到数据列表
    const dataList = computed(() =>
      store.getters['system/pageDataList'](props.pageName),
    )
    const dataListTotal = computed(() =>
      store.getters['system/pageDataTotal'](props.pageName),
    )

    //扩展插槽
    const restContentConfig = props.contentTableConfig!.propList.filter((item: any) => {
      if(item?.scopeName === 'createAt') return false
      if(item?.scopeName === 'updateAt') return false
      if(item?.scopeName === 'operation') return false
      return true
    })

    //删除用户按钮
    const clickDeleteUser = (item: any) => {
      const id =item.id
      const pageName = props.pageName
      store.dispatch('system/delButtonAction',{id, pageName})
    }
    // 编辑用户按钮
    const updateUserButton = (item: any) => {
      emit('update:clickChangeButton', item)
    }

    //新建用户按钮
    const createUserButton = () => {
      emit('update:createChangeButton')
    }

    return {dataList,dataListTotal,getStoreContent, restContentConfig, clickDeleteUser,updateUserButton, createUserButton}
  }
})
</script>

<style scoped>
.opation-button {
  display: flex;
}
</style>