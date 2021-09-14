export default (defaultLayoutName: string):configGroup => {
  return {
    name: '基础信息',
    configs: [{
      fieldType: 'input',
      fieldName: '图层名称',
      fieldCode: 'layerName',
      defaultValue: defaultLayoutName,
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
  }
}