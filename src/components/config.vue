<template>
  <div class="config-dashboard">
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="(configGroup, index) in configs"
        :title="configGroup.name"
        :name="index"
      >
        <GRSForm v-if="!refresh" :formModel="configGroup.configs" :defaultValue="defaultValue" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import GRSForm from './form.vue'
import { ref, reactive, watch, nextTick } from 'vue'
import { useStore } from 'vuex'
import { screenGlobalConfig } from '@/config/index'

const activeNames = ref(0)

const store = useStore()

const defaultValue: any = reactive({})

const configs = ref<configGroup[]>([])

const refresh = ref<boolean>(false)

watch(() => store.state.uuid, (value) => {
  if (value) {
    const widgetConfig = store.state.widgetList.filter((item: widgetConfig) => item.uuid === value)
    if (widgetConfig.length > 0) {
      configs.value = widgetConfig[0].baseInfo
    }
  }

  if (value && store.state.widgetConfig[value]) {
    defaultValue.value = store.state.widgetConfig[value]
  }

  if (!value) {
    configs.value = screenGlobalConfig.baseInfo
    defaultValue.value = store.state.screenConfig
  }

  refresh.value = true
  nextTick(() => {
    refresh.value = false
  })
})

</script>