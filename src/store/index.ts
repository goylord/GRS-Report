import { createStore } from 'vuex'

interface IState {
  widgetList: widgetConfig[];
  widgetConfig: any;
  uuid: string;
}
export interface setConfig {
  uuid: string;
  propsName: string;
  value: any
}
const store = createStore<IState>({
  state: {
    widgetList: [],
    widgetConfig: {},
    uuid: ''
  },
  mutations: {
    ADD_WIDGET(state, widget: widgetConfig) {
      state.widgetList.push(widget)
    },
    REMOVE_WIDGET(state, uid: string) {
      state.widgetList = state.widgetList.filter(widget => widget.uuid !== uid)
    },
    GET_WIEGET(state, uid: string): widgetConfig {
      const widgets = state.widgetList.filter(widget => widget.uuid !== uid)
      if (widgets.length > 0) {
        return widgets[0]
      }
      return state.widgetList[0]
    },
    SET_WIDGET_CONFIG(state, props:setConfig) {
      if (!state.widgetConfig[props.uuid]) {
        state.widgetConfig[props.uuid] = {}
      }
      state.widgetConfig[props.uuid][props.propsName] = props.value
    },
    SET_DEFAULT_WIDGET_CONFIG(state, props:any) {
      state.widgetConfig[props.uuid] = props.defaultValues
      console.log(state)
    },
    SET_UUID(state, uuid:string) {
      state.uuid = uuid
    },
  }
})

export default store