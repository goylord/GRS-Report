import screen from './widget/screen/screen'
import lineCharts from "./widget/charts/lineCharts";
import barCharts from "./widget/charts/barCharts";

export const widgets: widgetConfig[] = [lineCharts, barCharts]

export const findWidgetByName = (widgetName: string): widgetConfig => {
  const widgetResult = widgets.filter(widget => widget.widget === widgetName)
  if (widgetResult.length > 0) {
    return widgetResult[0]
  }
  return widgets[0]
}

export const screenGlobalConfig = screen