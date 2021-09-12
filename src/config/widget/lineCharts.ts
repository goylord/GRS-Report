export default<widgetConfig> {
  widget: 'lineCharts',
  name: '折线图',
  icon: 'line',
  baseInfo: [
    {
      name: '基础信息',
      configs: [{
        fieldType: 'input',
        fieldName: '图层名称',
        fieldCode: 'layerName',
        defaultValue: '折线图',
      }, {
        fieldType: 'color',
        fieldName: '背景颜色',
        fieldCode: 'backgroundColor',
        defaultValue: '#ffffff',
      }, {
        fieldType: 'number',
        fieldName: '宽度',
        fieldCode: 'width',
        defaultValue: 400,
      }, {
        fieldType: 'number',
        fieldName: '高度',
        fieldCode: 'height',
        defaultValue: 200,
      }, {
        fieldType: 'number',
        fieldName: '左边距',
        fieldCode: 'left',
        defaultValue: 0,
      }, {
        fieldType: 'number',
        fieldName: '高度',
        fieldCode: 'top',
        defaultValue: 0,
      }]
    }, {
      name: '标题设置',
      configs: [{
        fieldType: 'switch',
        fieldName: '是否显示',
        fieldCode: 'isShow',
        defaultValue: false,
      }, {
        fieldType: 'input',
        fieldName: '显示文字',
        fieldCode: 'title',
        defaultValue: '标题',
      }, {
        fieldType: 'number',
        fieldName: '文字大小',
        fieldCode: 'fontSize',
        defaultValue: 16,
      }, {
        fieldType: 'color',
        fieldName: '字体颜色',
        fieldCode: 'fontColor',
        defaultValue: '#00ffff',
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
  ]
}