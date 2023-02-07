// 引入 uView UI
import uView from './uni_modules/vk-uview-ui';
import interceptor from '@/common/request'

interceptor.install(uni)

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.use(uView)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(uView)
  return {
    app
  }
}
// #endif