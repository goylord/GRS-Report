<script setup lang="ts">
import { onMounted, reactive, nextTick, defineProps, watch } from "vue";
import { useStore } from 'vuex'
import * as echarts from "echarts";
const props = defineProps<{
  uuid: string
}>()
const store = useStore()
onMounted(() => {
  const options = reactive({
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  });
  nextTick(() => {
    const chartDom = document.getElementById(props.uuid);
    console.log(chartDom);
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      myChart.setOption(options);
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
