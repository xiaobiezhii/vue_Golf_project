import axios from 'axios';
import url from 'url';
import MOCKAPI from './MOCKAPI.js';
import router from '../router.js';

//创建axios实例
var instance = axios.create({
    baseURL: '/api'
});

instance.interceptors.response.use(function(response){
    return response;
},function (error){
    if(error.response.status){
        router.push({'name': 'login'})
    }
    const pathname =  url.parse(error.config.url).pathname;

    if(typeof MOCKAPI[pathname] == 'function'){
        return{
            data: MOCKAPI[pathname]()
        }
    }

    return Promise.reject(error);
});

export default instance;