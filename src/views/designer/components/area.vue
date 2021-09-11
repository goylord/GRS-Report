<template>
  <div class="canvas" @drop="drop" @dragover="allowDrop">
    <widget v-for="widget in widgetList" :widgetName="widget"></widget>
  </div>
</template>

<script lang="ts">
import draggable from 'vuedraggable'
import widget from '@/widgets/index.vue'
import { defineComponent, reactive } from 'vue'


export default defineComponent({
  components: {
    draggable,
    widget,
  },
  setup() {
    const widgetList:string[] = reactive([])
    const drop = (event: DragEvent) => {
      event.preventDefault();
      const widgetName =  event.dataTransfer?.getData("widget-code");
      widgetList.push(widgetName || '');
    }
    const allowDrop = (event: DragEvent) => {
       event.preventDefault();
    }
    return {
      widgetList,
      drop,
      allowDrop,
    }
  },
  data() {
    return {
      widgetList: [], 
    }
  },
})
</script>

<style lang="less">
.canvas {
  height: 100%;
  position: relative;
}
</style>