export default<configGroup> {
  name: '图例设置',
  configs: [{
    fieldType: 'select',
    fieldName: '布局方式',
    fieldCode: 'layoutMethod',
    options: [
      {value: 'horizontal', name: '水平'},
      {value: 'vertical', name: '竖直'},
    ],
    defaultValue: 'horizontal',
  }, {
    fieldType: 'select',
    fieldName: '水平位置',
    fieldCode: 'xLegendPosition',
    options: [
      {value: 'center', name: '居中'},
      {value: 'left', name: '左对齐'},
      {value: 'right', name: '右对齐'},
    ],
    defaultValue: 'left',
  }, {
    fieldType: 'select',
    fieldName: '竖直位置',
    fieldCode: 'yLegendPosition',
    options: [
      {value: 'top', name: '居上'},
      {value: 'center', name: '居中'},
      {value: 'bottom', name: '居下'},
    ],
    defaultValue: 'bottom',
  }]
}