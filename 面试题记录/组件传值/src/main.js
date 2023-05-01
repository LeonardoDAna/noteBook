import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store/store.js'
import wx from "weixin-js-sdk";
Vue.prototype.$wx = wx //挂在vue的实例上
Vue.use(VueAxios, axios)
import '../utils/rem'
Vue.config.productionTip = false
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
import router from './router'
import "./assets/common.scss";
import {
  Toast
} from 'vant';
Vue.use(Toast);
Vue.use(ElementUI)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

// new Vue({
//   render: h => h(App),
//   router,
// }).$mount('#app')