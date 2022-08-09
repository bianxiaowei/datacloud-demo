import Vue from 'vue'

//import './assets/css/theme/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';
import App from './App.vue'
import router from "./router";
import store from "./store";
import http from "axios";


Vue.config.productionTip = false

Vue.use(ElementUI);
//axios不是插件  只能绑定到 prototype上
Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
