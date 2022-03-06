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
    roseData: {
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
        // legend: {
        //   top: 'bottom'
        // },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '类别数据',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.roseData
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