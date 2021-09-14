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
export const usexAxis = (uuid: string, store: any, data: any) => {
  const xAxisOptions = computed(() => {
    return {
      xAxis: {
        type: 'category',
        axisLine: {
          lineStyle: {
            // 设置x轴颜色
            color: store.state.widgetConfig[uuid].axisLineColor
          }
        },
        // 设置X轴数据旋转倾斜
        axisLabel: {
          show: true,
          rotate: store.state.widgetConfig[uuid].axisLabelRotate, // 旋转角度
          interval: store.state.widgetConfig[uuid].axisLabelInterval,  //设置X轴数据间隔几个显示一个，为0表示都显示
          textStyle: {
            color: store.state.widgetConfig[uuid].axisLabelFontColor, // 坐标文字颜色
            fontSize: store.state.widgetConfig[uuid].axisLabelFontSize
          }
        },
        splitLine: {
          show: store.state.widgetConfig[uuid].xSplitLineShow,
          lineStyle: {
            color: store.state.widgetConfig[uuid].xSplitLineColor
          }
        },
        // boundaryGap值为false的时候，折线第一个点在y轴上
        data: data.value,
      },
    }
  })
  return xAxisOptions
}
export const useyAxis = (uuid: string, store: any) => {
  const yAxisOptions = computed(() => {
    return {
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: store.state.widgetConfig[uuid].yAxisLineColor
            }
          },
          // 设置X轴数据旋转倾斜
          axisLabel: {
            rotate: store.state.widgetConfig[uuid].yAxisLabelRotate, // 旋转角度
            interval: store.state.widgetConfig[uuid].yAxisLabelInterval,  //设置X轴数据间隔几个显示一个，为0表示都显示
            textStyle: {
              color: store.state.widgetConfig[uuid].yAxisLabelFontColor, // 坐标文字颜色
              fontSize: store.state.widgetConfig[uuid].yAxisLabelFontSize
            }
          },
          splitLine: {
            show: store.state.widgetConfig[uuid].ySplitLineShow,
            lineStyle: {
              color: store.state.widgetConfig[uuid].ySplitLineColor
            }
          },
        },
    }
  })
  return yAxisOptions
}
export const useLegend = (uuid: string, store: any) => {
  const legendOption = computed(() => {

    return {
      legend: {
        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
        orient: store.state.widgetConfig[uuid].layoutMethod,
        // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
        x: store.state.widgetConfig[uuid].xLegendPosition,
        // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
        y: store.state.widgetConfig[uuid].yLegendPosition,
      },
    }
  })
  return legendOption
}


export const useGrid = (uuid: string, store: any) => {
  const gridOption = computed(() => {
    const uint = store.state.widgetConfig[uuid].gridUint
    return {
      grid: {
        top: store.state.widgetConfig[uuid].gridTop + uint,
        left: store.state.widgetConfig[uuid].gridLeft + uint,
        right: store.state.widgetConfig[uuid].gridRight + uint,
        bottom: store.state.widgetConfig[uuid].gridBottom + uint,
        containLabel: true
      },
    }
  })
  return gridOption
}

export const useUpdate = (watchList: any[], watchInstance: any, options: any) => {
  watch(watchList,  (value) => {
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
  }, {
    immediate: true,
  })
}