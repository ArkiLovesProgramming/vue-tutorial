<template>
    <div>
        {{car}}
        <button @click="alertfun">btn</button>
    </div>
</template>
<script>
    import { ref, reactive, inject } from 'vue';
    export default {
        name: "Children",
        setup(props, context){
            // 获取祖组件传递过来命名为car的数据
            const car = inject('car');
            const alertfun = inject('alertfun');
            return {
                car,
                alertfun
            }
        }
            
    }
</script>
<style>
    
</style>