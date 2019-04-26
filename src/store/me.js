import Vue from 'vue';
import router from '../router';
export default{
    namespaced: true,
    state:{
        usename: '',
        nickname:'',
        avatar:''
    },
    mutations:{
        changeUsename(usename){
            this.usename = usename;
        },
        changeNickname(nickname){
            this.nickname = nickname;
        },
        changeAvatar(avatar){
            this.avatar = avatar;
        }
       
    },
    actions:{
        async checkMe(){
            const resultObj = await Vue.prototype.$http.get('/me').then(data => data.data);
            if(resultObj.err == -4){
                router.push({'name':'login'});
            }
            console.log(resultObj);
        }
    }
}