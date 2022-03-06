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
    barData: {
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
    xAxis: {
      data: props.barData!.xLabels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.barData!.values
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