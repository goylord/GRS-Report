<template>
  <div draggable="false" class="widget-mask" :style="baseInfoStyle">
    <component :is="getComponent(widgetName)" :uuid="uuid"></component>
    <slot name="anchor"></slot>
  </div>
</template>

<script setup lang="ts">
import lineCharts from './charts/lineCharts.vue'
const componentMap:any = {
  lineCharts,
}
import { defineProps, ComputedRef, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps<{
  widgetName: string;
  uuid: string;
}>()
const baseInfoStyle: ComputedRef<any> = computed<any>(() => {
  if (!store.state.widgetConfig[props.uuid]) {
    return {}
  }
  return {
    width: store.state.widgetConfig[props.uuid].width + 'px',
    height: store.state.widgetConfig[props.uuid].height + 'px',
    left: store.state.widgetConfig[props.uuid].left + 'px',
    top: store.state.widgetConfig[props.uuid].top + 'px',
    backgroundColor: store.state.widgetConfig[props.uuid].backgroundColor,
  }
})
const getComponent = (widgetName: string) => {
  return componentMap[widgetName]
}
</script>

<style lang="less">
.widget-mask {
  // position: relative;
  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
}
</style>