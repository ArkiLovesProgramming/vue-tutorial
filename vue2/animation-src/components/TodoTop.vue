<template>
    <div class="top">
        <input type="text" placeholder="Enter in your name, confirm it by enter" v-model.trim="title" @keydown.enter="addItem();title=''"/>
    </div>
</template>
<script>
    export default {
        name: "TodoTop",
        data(){
            return {
                title: ""
            }
        },
        methods: {
            addItem(){
                this.$bus.$emit("addItem", this.title);
            }
        }
    }
</script>
<style scoped>
    /* top */
    .top{
        border-radius: 8px;
        border: 1px solid gray;
        margin-bottom: 10px;
        height: 41px;
        display: flex;
    }
    .top > input{
        border: none;
        height: 34px;
        box-sizing: border-box;
        margin: 3px;
        flex: 1;
    }
    .top > input:focus{
        outline: none;
    }
</style>