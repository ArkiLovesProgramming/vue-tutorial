<template>
    <div class="todoitem">
        <input type="checkbox" :checked="todoitem.done" @change="checkItem(todoitem.id)"/>
        <span>{{todoitem.todoName}}</span>
        <button @click="deleteItem(todoitem.id)">delete</button>
    </div>
</template>
<script>
    export default {
        name: "TodoItem",
        props: ["todoitem", "deleteItem", "checkItem"]
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
    .todoitem > button{
        display: inline-block;
        margin-left: auto;
        height: 28px;
        margin-right: 4px;
        color: white;
        background-color: #d84444;
        border-radius: 4px;
        border: none;
        display: none;
    }
    .todoitem > button:hover{
        background-color: #9e2424;
        cursor: pointer;
    }
    .todoitem:hover button{
        display: inline-block;
    }
</style>