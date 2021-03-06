import { useBase, title, xAxis, yAxis, legend, grid } from '../template/index'

export default<widgetConfig> {
  widget: 'barCharts',
  name: '柱状图',
  icon: '#icon-duidiezhuzhuangtu',
  baseInfo: [
    useBase('柱状图'),
    title,
    xAxis,
    yAxis,
    legend,
    grid,
  ]
}