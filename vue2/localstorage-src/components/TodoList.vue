<template>
    <div class="todolist">
        <TodoItem v-for="todoitem in todoList" :key="todoitem.id" :todoitem="todoitem" :deleteItem="deleteItem" :checkItem="checkItem"/>
    </div>
</template>
<script>
    import TodoItem from "./TodoItem.vue";
    export default {
        name: "TodoList",
        components: {
            TodoItem,
        },
        props: ["todoList", "deleteItem", "checkItem"],
        mounted() {
            console.log(this.todoList)
        }
    }
</script>
<style scoped>
    /* list */
    .todolist{
        border-radius: 8px;
        border: 1px solid gray;
        overflow: hidden;
        margin-bottom: 1c0px;
    }
</style>