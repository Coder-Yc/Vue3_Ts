<template>
  <YcTable :propList="contentTableConfig.propList"
           :showIndex="contentTableConfig.showIndex"
           :title="contentTableConfig.title"
           :dataList="dataList"
           :dataListTotal="dataListTotal"
           >

    <template #headerOperation>
      <el-button type="primary">搜索用户</el-button>
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
    <template #operation id="opation-button">
        <div class="opation-button">
          <el-button type="danger" size="small">删除</el-button>
         <el-button type="info" size="small">编辑</el-button>
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


  </YcTable>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from "vuex";
import YcTable from "@/baseUi/cpns/table.vue";
import contentTableConfig from '@/views/main/product/goods/config/contentTableConfig';

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    YcTable
  },
  setup (props) {
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

    const restContentConfig = contentTableConfig.propList.filter((item) => {
      if(item?.scopeName === 'createAt') return false
      if(item?.scopeName === 'updateAt') return false
      if(item?.scopeName === 'operation') return false
      return true
    })

    return {dataList,dataListTotal,getStoreContent, restContentConfig}
  }
})
</script>

<style scoped>
.opation-button {
  display: flex;
}
</style>