import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([

  {
    name: 'vueApp',
    entry: '//localhost:8888',
    container: '#vueApp',
    activeRule: '/vue',
  },

]);
// 启动 qiankun
start();
//测试一下提交功能