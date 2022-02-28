<template>
  <YcTable :propList="contentTableConfig.propList"
           :showIndex="contentTableConfig.showIndex"
           :title="contentTableConfig.title"
           :dataList="dataList"
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


  </YcTable>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from "vuex";
import YcTable from "@/baseUi/cpns/table.vue";

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
    store.dispatch('system/getDataListAction',{
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
console.log(props.pageName);

    const dataList = computed(() => store.getters['system/pageDataList'](props.pageName))
    // console.log(dataList);


    return {dataList}
  }
})
</script>

<style scoped>
.opation-button {
  display: flex;
}
</style>