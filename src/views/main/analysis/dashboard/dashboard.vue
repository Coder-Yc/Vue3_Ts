<template>
  <div class="dashboard">
    <el-row :gutter="15">
      <el-col :span="12">
        <yccard title="分类商品数量(饼图)">
          <pipe :pieData="categoryGoodsCount"></pipe>
        </yccard>
      </el-col>
      <el-col :span="12" >
        <yccard title="分类商品数量(玫瑰图)">
          <rose :roseData="categoryGoodsCount"></rose>
        </yccard>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <yccard title="分类商品的销量">
          <ycline :lineData="categoryGoodsSale"></ycline>
        </yccard>
      </el-col>
      <el-col :span="12" >
        <yccard title="分类商品的收藏">
          <bar :barData="categoryGoodsFavor"></bar>
        </yccard>
      </el-col>
    </el-row>

  </div>
</template>

<script lang="ts">
import { defineComponent,computed } from 'vue'
import { useStore } from "vuex";
import Yccard from "@/components/Yccard/card.vue";
import pipe from "@/components/page-echarts/pipe.vue";
import rose from "@/components/page-echarts/rose.vue";
import Ycline from "@/components/page-echarts/line.vue";
import bar from "@/components/page-echarts/bar.vue";

export default defineComponent({
  name: 'dashboard',
  components: {
    Yccard,
    pipe,
    rose,
    Ycline,
    bar
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')
    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
