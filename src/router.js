import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './views/login/Login.vue';
import Index from './views/index/Index.vue';
import store from './store/index.js';

Vue.use(VueRouter);

const router =  new VueRouter({
    routes : [
        { path: '/', component: Index},
        { path: '/login', component: Login, name: 'login'}
    ]
});

//前置守卫
//中间件机理
router.beforeEach((to,from,next)=>{
    if(to.name != 'login'){
        store.dispatch('me/checkMe');
    }
    next();
});

export default router;