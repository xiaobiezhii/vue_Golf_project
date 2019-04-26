<template>
    <div>
        <h1>首页首页</h1>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        created(){
            Vue.prototype.$http.get('/mingan').then(data => {
                alert(data.data.a);
            })
        }
    }
</script>

<style lang="less" scoped>

</style>