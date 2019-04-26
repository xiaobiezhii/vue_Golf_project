<template>
	<div>
		<h1>======我是公共的部分======</h1>
		<router-view></router-view>
		<h1>======我是公共的部分======</h1>
	</div>
</template>

<script>

import Vue from 'vue';
export default {
	created(){
		Vue.prototype.$http.get('/aaa?_page=8').then(data=>{
			alert(data.data.a);
		})
	}
};
</script>

<style>

</style>
