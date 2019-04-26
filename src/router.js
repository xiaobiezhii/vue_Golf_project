import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './views/login/Login.vue';
import Index from './views/index/Index.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes : [
        { path: '/', component: Index},
        { path: '/login', component: Login, name: 'login'}
    ]
})