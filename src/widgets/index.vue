<template>
  <component :is="widgetName"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LineCharts from './charts/lineCharts.vue'
export default defineComponent({
  props: {
    widgetName: String,
  },
  components: {
    LineCharts,
  },
})
</script>