import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store/index'
import ElementUI from 'element-plus'
// import './theme/dark/index.css'
import "./assets/iconfont/iconfont.css"
import "./assets/iconfont/iconfont.js"
import '../node_modules/element-plus/theme-chalk/index.css'

createApp(App)
  .use(Router)
  .use(Store)
  .use(ElementUI, {
    size: 'small'
  })
  .mount('#app')
