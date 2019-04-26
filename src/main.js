import Vue from 'vue'
import iView from 'iview';

import App from './App.vue'
import http from './utils/http.js';
import router from './router';

Vue.config.productionTip = false

Vue.use(iView);

Vue.prototype.$http = http;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
