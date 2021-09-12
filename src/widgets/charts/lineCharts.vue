<script setup lang="ts">
import { onMounted, reactive, nextTick, defineProps } from "vue";
import * as echarts from "echarts";
const props = defineProps<{
  uuid: string
}>()
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
      chartDom.addEventListener("resize", () => {
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
