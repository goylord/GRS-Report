import { useBase, title, xAxis, yAxis, legend, grid } from '../template/index'

export default<widgetConfig> {
  widget: 'lineCharts',
  name: '折线图',
  icon: '#icon-jibenzhexiantu',
  baseInfo: [
    useBase('折线图'),
    title,
    xAxis,
    yAxis,
    legend,
    grid,
  ]
}