import { computed, watch } from 'vue'

export const useTitle = (uuid: string, store: any) => {
  const titleOptions = computed(() => {
    return {
      title: {
        text: store.state.widgetConfig[uuid].titleText,
        show: store.state.widgetConfig[uuid].showTitle,
        left: store.state.widgetConfig[uuid].titlePosition,
        textStyle: {
          color: store.state.widgetConfig[uuid].fontColor,
          fontSize: store.state.widgetConfig[uuid].fontSize,
          fontWeight: store.state.widgetConfig[uuid].fontStyle,
        }
      }
    }
  })
  return titleOptions
}

export const useUpdate = (watchList: any[], watchInstance:any, options: any) => {
  watch(watchList, (value) => {
    console.log('更新函数', options, value)
    let optionsTmp = {
      ...options,
    }
    value.forEach(config => {
      optionsTmp = {
        ...optionsTmp,
        ...config,
      }
    })

    watchInstance.setOption(optionsTmp)
  })
}