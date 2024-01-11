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
import { ref } from 'vue';
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

            return {
                msg,
                childEmit
            }
        }
    }
</script>
<style>
    
</style>