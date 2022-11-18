import Vue from 'vue'
import App from './App.vue'
import router from "@/router/index"
import store from '@/store/index';
import './plugins/element-ui.js'
import "@/assets/css/element-variables.scss"
//全局注册elementui 组件
import elementcomponents from "@/utils/globalElement"
import './permission.js'
import './icons/index'
Vue.use(elementcomponents)

//使用mock
process.env.VUE_APP_MOCK === 'true' && require('./mock/mock.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
