<template>
    <div class="deginer">
        <layout>
            <template v-slot:widgets>
                <widgets />
            </template>
            <template v-slot:container>
                <designer />
            </template>
            <template v-slot:baseInfo>
                <config />
            </template>
        </layout>
    </div>
</template>

<script setup lang="ts">
import layout from './components/layout.vue'
import widgets from './components/widgets.vue'
import designer from './components/designer.vue'
import config from '@/components/config.vue'

</script>
 
 <style lang="less">
.deginer {
    height: 100vh;
    //  background-color: #111;
}
</style>