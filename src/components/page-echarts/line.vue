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
    title: {
      type: String,
      require: true
    },
    lineData: {
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
          title: {
            text: props.title
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {},
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: props.lineData!.xLabels
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '分别销量',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: props.lineData!.values
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