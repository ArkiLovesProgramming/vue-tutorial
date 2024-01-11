<template>
    <div>
        <h3>Watch</h3>
        <h3>sum:{{sum}}</h3>
        <button @click="sum++">sum++</button><br/>
        msg: <input type="test" v-model="msg" />
    </div>
</template>
<script>
    import { ref, watch, reactive } from "vue" 
    export default {
        name: "TestWatch",
        setup(){
            let sum = ref(0)
            let msg = ref("")
            let person = reactive({
            name:'张三',
            age:18,
                job:{
                    j1:{
                        salary:20
                    }
                }
            })

            //case 1, watch ref's basic data type
            watch(sum,(newValue,oldValue)=>{
	            // console.log('sum变化了',newValue,oldValue)
            },{immediate:true})

            //case 2, watch multiple elements
            watch([sum, msg],(newValue,oldValue)=>{
	            console.log('sum变化了',newValue,oldValue)
            },{immediate:true})

            return {
                sum,
                msg,
                ...person
            }
        }
    }
</script>
<style lang="css">
    
</style>