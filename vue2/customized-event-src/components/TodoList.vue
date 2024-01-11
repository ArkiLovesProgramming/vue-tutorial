<template>
    <div class="todolist">
        <TodoItem v-for="todoitem in todoList" :key="todoitem.id" :todoitem="todoitem" @deleteItem="deleteItem" @checkItem="checkItem"/>
    </div>
</template>
<script>
    import TodoItem from "./TodoItem.vue";
    export default {
        name: "TodoList",
        components: {
            TodoItem,
        },
        props: ["todoList"],
        methods: {
            deleteItem(id){
                this.$emit("deleteItem", id);
            },
            checkItem(id){
                this.$emit("checkItem", id);
            }
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