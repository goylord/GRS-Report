export default<configGroup> {
  name: '布局设置',
  configs: [{
    fieldType: 'select',
    fieldName: '布局单位',
    fieldCode: 'gridUint',
    options: [
      {value: '%', name: '%'},
      {value: 'px', name: 'px'},
    ],
    defaultValue: '%',
  }, {
    fieldType: 'number',
    fieldName: '上边距',
    fieldCode: 'gridTop',
    defaultValue: 20,
  }, {
    fieldType: 'number',
    fieldName: '右边距',
    fieldCode: 'gridRight',
    defaultValue: 5,
  }, {
    fieldType: 'number',
    fieldName: '下边距',
    fieldCode: 'gridBottom',
    defaultValue: 20,
  }, {
    fieldType: 'number',
    fieldName: '左边距',
    fieldCode: 'gridLeft',
    defaultValue: 5,
  },]
}