import Vue from 'vue'
import VueRouter from 'vue-router';
import iView from 'iview';

import App from './App.vue'
import routes from './routes';

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(iView);

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
