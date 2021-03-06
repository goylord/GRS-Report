export default<configGroup> {
  name: 'X轴设置',
  configs: [{
    fieldType: 'color',
    fieldName: 'x轴颜色',
    fieldCode: 'axisLineColor',
    defaultValue: '#999999',
  }, {
    fieldType: 'number',
    fieldName: '旋转角度',
    fieldCode: 'axisLabelRotate',
    defaultValue: 0,
  }, {
    fieldType: 'number',
    fieldName: '间隔',
    fieldCode: 'axisLabelInterval',
    defaultValue: 0,
  }, {
    fieldType: 'number',
    fieldName: '文字大小',
    fieldCode: 'axisLabelFontSize',
    defaultValue: 12,
  }, {
    fieldType: 'color',
    fieldName: '字体颜色',
    fieldCode: 'axisLabelFontColor',
    defaultValue: '#999999',
  }, {
    fieldType: 'switch',
    fieldName: '显示分割线',
    fieldCode: 'xSplitLineShow',
    defaultValue: false,
  }, {
    fieldType: 'color',
    fieldName: '分割线',
    fieldCode: 'xSplitLineColor',
    defaultValue: '#999999',
  }]
}