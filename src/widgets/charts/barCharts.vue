<script setup lang="ts">
import { onMounted, reactive, ref, nextTick, defineProps, watch } from "vue";
import { useStore } from 'vuex'
import * as echarts from "echarts";
import { useTitle, usexAxis, useyAxis, useLegend, useGrid, useUpdate } from '@/utils/chart'

const props = defineProps<{
  uuid: string
}>()

const xAxisData = ref<any[]>([])

const store = useStore()
const titleConfig = useTitle(props.uuid, store)
const xAxisConfig = usexAxis(props.uuid, store, xAxisData)
const yAxisConfig = useyAxis(props.uuid, store)
const legendConfig = useLegend(props.uuid, store)
const gridConfig = useGrid(props.uuid, store)

onMounted(() => {
  const options = reactive({
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "bar",
        smooth: true,
      },
    ],
  });
  xAxisData.value = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  nextTick(() => {
    const chartDom = document.getElementById(props.uuid);
    console.log(chartDom);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      useUpdate([titleConfig, xAxisConfig, yAxisConfig, legendConfig, gridConfig], myChart, options);
      watch(() => store.state.widgetConfig[props.uuid].height, () => {
        myChart.resize()
      })
      watch(() => store.state.widgetConfig[props.uuid].width, () => {
        myChart.resize()
      })
    }
  });
});
</script>

<template>
  <div :id="uuid" style="width: 100%;height: 100%;"></div>
</template>

<style lang="less">
</style>
