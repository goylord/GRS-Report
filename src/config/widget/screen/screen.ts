export default<widgetConfig> {
  widget: 'screen',
  name: '大屏设置',
  icon: 'line',
  baseInfo: [
    {
      name: '大屏设置',
      configs: [{
        fieldType: 'color',
        fieldName: '背景颜色',
        fieldCode: 'backgroundColor',
        defaultValue: '#ffffff',
      }, {
        fieldType: 'number',
        fieldName: '宽度',
        fieldCode: 'width',
        defaultValue: 1920,
      }, {
        fieldType: 'number',
        fieldName: '高度',
        fieldCode: 'height',
        defaultValue: 1080,
      }]
    }]
}