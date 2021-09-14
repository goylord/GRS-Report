export default<configGroup> {
  name: '标题设置',
  configs: [{
    fieldType: 'switch',
    fieldName: '是否显示',
    fieldCode: 'showTitle',
    defaultValue: false,
  }, {
    fieldType: 'input',
    fieldName: '显示文字',
    fieldCode: 'titleText',
    defaultValue: '标题',
  }, {
    fieldType: 'number',
    fieldName: '文字大小',
    fieldCode: 'fontSize',
    defaultValue: 12,
  }, {
    fieldType: 'color',
    fieldName: '字体颜色',
    fieldCode: 'fontColor',
    defaultValue: '#999999',
  }, {
    fieldType: 'select',
    fieldName: '字体样式',
    fieldCode: 'fontStyle',
    options: [
      {value: 'normal', name: '正常'},
      {value: 'bold', name: '粗体'},
      {value: 'bolder', name: '特粗体'},
      {value: 'lighter', name: '细体'}
    ],
    defaultValue: 'normal',
  }, {
    fieldType: 'select',
    fieldName: '显示位置',
    fieldCode: 'titlePosition',
    options: [
      {value: 'center', name: '居中'},
      {value: 'left', name: '左对齐'},
      {value: 'right', name: '右对齐'},
    ],
    defaultValue: 'center',
  }]
}