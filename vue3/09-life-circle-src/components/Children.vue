<template>
    <div>
        <h3>Context emit</h3>
        <input type="text" v-model="msg"/>
        <button @click="childEmit">send</button>
        <h3>{{msg}}</h3>
        <h3>{{name}}</h3>
    </div>
</template>
<script>
import { ref, onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from 'vue';
    export default {
        name: "Children",
        props: ["name"],
        emits: ['hello'],
        setup(props, context){
            console.log(props);

            let msg = ref("")
            
            let childEmit = function(){
                context.emit("hello", msg.value);
            }

            //----life circle-----
            console.log('---setup---')
			//数据
			let sum = ref(0)

			//通过组合式API的形式去使用生命周期钩子
			onBeforeMount(()=>{
				console.log('---onBeforeMount---')
			})
			onMounted(()=>{
				console.log('---onMounted---')
			})
			onBeforeUpdate(()=>{
				console.log('---onBeforeUpdate---')
			})
			onUpdated(()=>{
				console.log('---onUpdated---')
			})
			onBeforeUnmount(()=>{
				console.log('---onBeforeUnmount---')
			})
			onUnmounted(()=>{
				console.log('---onUnmounted---')
			})

            return {
                msg,
                childEmit
            }
        }
    }
</script>
<style>
    
</style>