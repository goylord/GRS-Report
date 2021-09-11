<script setup lang="ts">
import { onMounted, reactive, nextTick } from 'vue';
import * as echarts from 'echarts'
onMounted(() => {
  const options = reactive({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }]
  })
  nextTick(() => {
const chartDom = document.getElementById('lineCharts');
console.log(chartDom);
  if (chartDom) {
    const myChart = echarts.init(chartDom);
    myChart.setOption(options);
  }
  })
  
})
</script>

<template>
  <div id="lineCharts"></div>
</template>

<style lang="less">
#lineCharts {
  width: 200px;
  height: 100px;
  background-color: white;
}
</style>