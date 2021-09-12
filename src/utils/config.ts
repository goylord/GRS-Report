export const getDefaultValue = (widget: widgetConfig, store: any) => {
  const defaultValues:any = {}
  widget.baseInfo.forEach(configGroup => {
    if (configGroup.configs) {
      configGroup.configs.forEach(config => {
        defaultValues[config.fieldCode] = config.defaultValue
      })
    }
  })
  store.commit('SET_DEFAULT_WIDGET_CONFIG', {
    uuid: widget.uuid,
    defaultValues,
  })
}