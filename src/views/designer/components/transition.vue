<template>
  <div
    draggable="false"
    @mousedown="changeSizeStart($event, 'left-top')"
    class="anchor anchor-left-top"
  ></div>
  <div
    draggable="false"
    @mousedown="changeSizeStart($event, 'right-top')"
    class="anchor anchor-right-top"
  ></div>
  <div draggable="false" @mousedown="changeSizeStart($event, 'top')" class="anchor anchor-top"></div>
  <div
    draggable="false"
    @mousedown="changeSizeStart($event, 'left-bottom')"
    class="anchor anchor-left-bottom"
  ></div>
  <div
    draggable="false"
    @mousedown="changeSizeStart($event, 'bottom')"
    class="anchor anchor-bottom"
  ></div>
  <div
    draggable="false"
    @mousedown="changeSizeStart($event, 'right-bottom')"
    class="anchor anchor-right-bottom"
  ></div>
  <div draggable="false" @mousedown="changeSizeStart($event, 'left')" class="anchor anchor-left"></div>
  <div draggable="false" @mousedown="changeSizeStart($event, 'right')" class="anchor anchor-right"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { disposeMouseMove } from '@/utils/utils'
const props = defineProps<{
  widget: widgetConfig,
}>()

const store = useStore()
const changeSizeStart = (event: MouseEvent, type: string | undefined) => {
  // 获取配置
  const { widget } = props
  const widgetConfig: any = store.state.widgetConfig[widget.uuid || '']
  // 记录原始位置与大小
  const position = {
    left: widgetConfig.left,
    top: widgetConfig.top,
    bottom: widgetConfig.top + widgetConfig.bottom,
    right: widgetConfig.left + widgetConfig.width,
    width: widgetConfig.width,
    height: widgetConfig.height
  }
  const mousePosition = {
    x: event.screenX,
    y: event.screenY,
  }
  const disposeMethod = disposeMouseMove(type, store, props)
  const disposeMove = (event: MouseEvent) => {
    // 监听鼠标移动
    disposeMethod(position, mousePosition, {
      x: event.screenX,
      y: event.screenY,
    })
  }
  window.addEventListener('mousemove', disposeMove)
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', disposeMove, false)
  })
}


</script>

<style lang="less">
</style>