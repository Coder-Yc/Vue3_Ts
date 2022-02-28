<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{title}}</div>
        <slot name="headerOperation" class="headerOperation"></slot>
      </slot>
    </div>
    <el-table :data="dataList" border style="width: 100%" >
      <el-table-column v-if="showIndex" type="index" label="序号" width="50"></el-table-column>
      <template v-for="propitem in propList" :key="propitem">
        <el-table-column v-bind="propitem" align="center">
          <template #default="scope">
            <slot :name="propitem.scopeName" :row="scope.row">
              {{scope.row[propitem.prop]}}
            </slot>
          </template>

        </el-table-column>
      </template>
    </el-table>
    <div class="pagination">
      <slot name="pagination">
        <el-pagination
          :page-sizes="[100, 200, 300, 400]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
    </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IuserListData } from './types'
export default defineComponent({
  props: {
    dataList: {
      type: Array,
      required: true
    },
    propList: {
      type: Array as PropType<IuserListData[]>,
      required: true
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      requied: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
.table {
  padding: 20px;
  margin: 20px 0px;
  background-color: #fff;

}
.pagination {
  margin: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

</style>