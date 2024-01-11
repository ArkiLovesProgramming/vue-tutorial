<template>
    <div class="todoitem">
        <input type="checkbox" :checked="todoitem.done" @change="checkItem()"/>
        <span @dblclick="setEdit()" v-show="!todoitem.isEditing">{{todoitem.todoName}}</span>
        <input @blur="updateTodoItem" @keydown.enter="updateTodoItem" ref="inputbox" v-show="todoitem.isEditing" type="text" value="eating"/>
        <div>
            <button editstyle @click="setEdit()">edit</button>
            <button @click="deleteItem()">delete</button>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TodoItem",
        props: ["todoitem"],
        methods: {
            deleteItem(){
                this.$bus.$emit("deleteItem",this.todoitem.id);
            },
            checkItem(){
                console.log("checkItem!")
                this.$bus.$emit("checkItem",this.todoitem.id);
            },
            setEdit(){
                this.$set(this.todoitem, "isEditing", true);
                //it will be excuted before the page get rendered, so it wouldn't work
                //this.$refs.inputbox.focus();
                //we use $nextTick(callback), it work same as you use a setTimeout() here, It will be called
                //after the page get rendered
                this.$nextTick(()=>{
                    this.$refs.inputbox.focus();
                });
            },
            updateTodoItem(e){
                this.$bus.$emit("updateTodoItem", this.todoitem.id, e.target.value);
            }
        }
    }
</script>
<style scoped>
    /* item */
    .todoitem{
        height: 34px;
        border-bottom: 1px solid gray;
        display: flex;
        align-items: center;
        padding: 3px;
        /* cursor: pointer; */
    }
    .todoitem:hover{
        background-color: #E7E6DE;
    }
    .todoitem:last-child{
        border: none;
    }
    .todoitem > div{
        margin-left: auto;
    }
    .todoitem input[type="text"]{
        height: 20px;
        font-size: 14px;
        margin-top: 2px;
    }
    .todoitem button{
        height: 28px;
        width: 50px;
        margin-right: 4px;
        color: white;
        background-color: #d84444;
        border-radius: 4px;
        border: none;
        display: none;
    }
    .todoitem button:hover{
        background-color: #9e2424;
        cursor: pointer;
    }
    .todoitem:hover button{
        display: inline-block;
    }
    .todoitem button[editstyle]{
        background-color: #7ccce9;
    }
    .todoitem button[editstyle]:hover{
        background-color: #4f879b;
    }
</style>