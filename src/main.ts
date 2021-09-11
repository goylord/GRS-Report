import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import ElementUI from 'element-plus'
// import './theme/dark/index.css'
import '../node_modules/element-plus/theme-chalk/index.css'

createApp(App)
  .use(Router)
  .use(ElementUI, {
    size: 'small'
  })
  .mount('#app')
