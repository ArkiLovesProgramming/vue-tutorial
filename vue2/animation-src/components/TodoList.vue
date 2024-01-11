<template>
    <div class="todolist">
        <transition-group name="todo">
            <TodoItem v-for="todoitem in todoList" :key="todoitem.id" :todoitem="todoitem"/>
        </transition-group>
    </div>
</template>
<script>
    import TodoItem from "./TodoItem.vue";
    export default {
        name: "TodoList",
        components: {
            TodoItem,
        },
        props: ["todoList"]
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
    .todo-enter-active {
        animation: enterAni 0.25s linear;
    }
    .todo-leave-active {
        animation: leaveAni 0.25s linear;
    }
    /* 自定义动画 */
    @keyframes enterAni {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0px);
        }
    }
    @keyframes leaveAni {
        from {
            transform: translateX(0px);
        }
        to {
            transform: translateX(100%);
        }
    }
</style>