<template>
    <div class="deginer">
        <layout>
            <template v-slot:widgets>
                <widgets />
            </template>
            <template v-slot:container>
                <canvasArea />
            </template>
        </layout>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import layout from './components/layout.vue'
import widgets from './components/widgets.vue'
import canvasArea from './components/area.vue'

export default defineComponent({
    components: {
        layout,
        widgets,
        canvasArea,
    }
})

</script>
 
 <style lang="less">
.deginer {
    height: 100vh;
    //  background-color: #111;
}
</style>