import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    // global bus 
    // $ just make it vue style
    // 安装全局事件总线，$bus就是当前应用的vm/install global bus
    Vue.prototype.$bus = this
  }
}).$mount('#app')
