<template>
  <div >
    <div ref="echartDivRef" :style="{ width: '100%', height: '360px ' }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect, onMounted } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  props: {
    pieData: {
      type: Object,
      require: true
    }
  },
  setup (props) {
    const echartDivRef = ref<HTMLElement>()
    onMounted(() => {
      const echartInstance = echarts.init(echartDivRef.value!)
    const options = computed(() => {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    })
    watchEffect(() => {
      echartInstance.setOption(options.value)
    })
    })
    return {echartDivRef}
  }
})
</script>

<style scoped>

</style>