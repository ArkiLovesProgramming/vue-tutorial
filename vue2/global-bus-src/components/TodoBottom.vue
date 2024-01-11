<template>
    <div class="bottom">
        <input type="checkbox" v-model="allChecked" @change="checkAll()"/>
        <span>finished {{numchecked}}/{{totalnum}}</span>
        <button @click="deleteAll()">delete all</button>
    </div>
</template>

<script>
    export default {
        name: "TodoBottom",
        data(){
            return {
                allChecked: false
            }
        },
        props: ["numchecked", "totalnum"],
        methods: {
            checkAll(){
                this.$bus.$emit("checkAll", this.allChecked);
            },
            deleteAll(){
                this.$bus.$emit("deleteAll");
            }
        }
    }
</script>

<style scoped>
    /* bottom */
    .bottom{
            border-radius: 8px;
            /* border: 1px solid gray; */
            /* background-color: #E7E6DE; */
            margin-top: 20px;
            padding: 3px;
            height: 34px;
            display: flex;
            align-items: center;
        }
        .bottom>button{
            display: inline-block;
            margin-left: auto;
            height: 28px;
            margin-right: 4px;
            color: white;
            background-color: #d84444;
            border-radius: 4px;
            border: none;
        }
        .bottom>button:hover{
            background-color: #9e2424;
            cursor: pointer;
        }

</style>