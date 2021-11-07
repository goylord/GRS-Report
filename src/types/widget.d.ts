interface optionType {
  name: string;
  value: string;
}

interface configItem {
  fieldType: string;
  fieldName: string;
  fieldCode: string;
  defaultValue: string|number;
  options?: optionType[];
  props?: any;
}

interface configGroup {
  name: string;
  configs: configItem[];
}

interface widgetConfig {
  widget: string;
  name: string;
  icon?: string;
  uuid?: string;
  baseInfo: configGroup[];
}