<template>
  <div
    id="canvas"
    @drop="drop"
    @dragover="allowDrop"
    @mousemove="moveWidget"
    @mouseup="stopMove"
    @mouseleave="stopMove"
    @click="selectScreen"
  >
    <widget
      class="widget-component"
      :class="{ hover: hoverUUID === (widget.uuid || 'none_id') }"
      :data-uuid="widget.uuid"
      :uuid="widget.uuid"
      @mousedown="widgetMoveStart"
      @mouseup="stopMove"
      @click="selectWidget($event, widget.uuid)"
      v-for="widget in widgetList"
      :widgetName="widget.widget"
    >
      <template v-slot:anchor>
        <GRStransition :widget="widget"/>
      </template>
    </widget>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import widget from '@/widgets/index.vue'
import GRStransition from './transition.vue'
import { defineComponent, computed, ComputedRef, ref, reactive, onMounted, nextTick, watch } from 'vue'
import { useStore } from 'vuex'
import { findWidgetByName } from '@/config/index'
import { uuid } from '@/utils/utils'
import { getDefaultValue } from '@/utils/config'

export default defineComponent({
  components: {
    draggable,
    widget,
    GRStransition,
  },
  setup(_, { emit }) {
    const store = useStore()
    const widgetList: ComputedRef<widgetConfig[]> = computed<widgetConfig[]>(() => store.state.widgetList)
    const targetElement = ref<any>()
    const isMove = ref<boolean>(false)
    const hoverUUID = ref<string>('')

    const position = reactive({
      x: 0,
      y: 0,
    })
    onMounted(() => {
      nextTick(() => {
        const target = document.getElementById('canvas')
        console.log(target, target?.offsetTop, target?.offsetLeft)
        position.x = target?.offsetLeft || 0
        position.y = target?.offsetTop || 0
      })
    })
    const drop = (event: DragEvent) => {
      event.preventDefault();
      const widgetName = event.dataTransfer?.getData("widget-code");
      if (!widgetName) return
      const widget: widgetConfig = { ...findWidgetByName(widgetName || '') }
      widget.uuid = uuid()
      store.commit('ADD_WIDGET', widget)
      getDefaultValue(widget, store)
      emit('showForm', widget)
      event.dataTransfer?.setData("widget-code", '');
    }
    const allowDrop = (event: DragEvent) => {
      event.preventDefault();
    }
    const widgetMoveStart = (event: any) => {
      if (!event.target.className.includes('widget')) return
      targetElement.value = event.target
      isMove.value = true
    }
    const moveWidget = (event: MouseEvent) => {
      if (!isMove.value) return
      event.preventDefault();
      if (targetElement.value) {
        store.commit('SET_WIDGET_CONFIG', {
          uuid: targetElement.value.dataset.uuid,
          propsName: 'left',
          value: (event.x - position.x - (targetElement.value.clientWidth / 2))
        })
         store.commit('SET_WIDGET_CONFIG', {
          uuid: targetElement.value.dataset.uuid,
          propsName: 'top',
          value: (event.y - position.y - (targetElement.value.clientHeight / 2))
        })
      }
    }
    const stopMove = (event: MouseEvent) => {
      isMove.value = false
    }
    const selectWidget = (event: any, uuid: string | undefined) => {
      hoverUUID.value = uuid || ''
      event.stopPropagation()
    }
    const selectScreen = () => {
      hoverUUID.value = ''
    }

    watch(hoverUUID, (value) => {
      store.commit('SET_UUID', value)
      console.log(store.state.uuid)
    })

    return {
      hoverUUID,
      widgetList,
      drop,
      allowDrop,
      moveWidget,
      stopMove,
      selectWidget,
      selectScreen,
      widgetMoveStart,
    }
  }
})
</script>

<style lang="less">
#canvas {
  height: 100%;
  width: 100%;
  position: relative;
  .widget-component {
    position: absolute;
    cursor: move;
  }
  .hover {
    z-index: 1000;
    border: 1px dashed #6688ee;
    .anchor {
      display: block;
    }
  }
  .anchor {
    z-index: 1000;
    display: none;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #3366ff;
  }
  .anchor-left-top {
    left: -5px;
    top: -5px;
    cursor: nwse-resize;
  }
  .anchor-right-top {
    right: -5px;
    top: -5px;
    cursor: nesw-resize;
  }
  .anchor-top {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    cursor: ns-resize;
  }
  .anchor-left-bottom {
    left: -5px;
    bottom: -5px;
    cursor: nesw-resize;
  }
  .anchor-bottom {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    cursor: ns-resize;
  }
  .anchor-right-bottom {
    bottom: -5px;
    right: -5px;
    cursor: nwse-resize;
  }
  .anchor-left {
    left: -5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: ew-resize;
  }
  .anchor-right {
    right: -5px;
    top: 50%;
    transform: translateY(-50%);
    cursor: ew-resize;
  }
}
</style>