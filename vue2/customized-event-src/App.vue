<template>
  <div class="container">
    <h2>To do</h2>
    <TodoTop ref="TodoTop" />
    <TodoList :todoList="todoList" @deleteItem="deleteItem" @checkItem="checkItem"/>
    <TodoBottom @checkAll="checkAll" @numchecked="numchecked" :totalnum="totalnum" @deleteAll="deleteAll"/>
  </div>
</template>

<script>

  import TodoTop from "./components/TodoTop.vue";
  import TodoList from "./components/TodoList.vue";
  import TodoBottom from "./components/TodoBottom.vue";

  export default {
    name: "App",
    data(){
      return {
        todoList: JSON.parse(localStorage.getItem("todoList")) || []
      }
    },
    methods: {
      deleteItem(id){
        this.todoList = this.todoList.filter((item)=>item.id != id);
      },
      checkItem(id){
        this.todoList.forEach((item)=>{
          if (item.id == id) item.done = !item.done;
        });
      },
      addItem(todoName){
        let item = {id: new Date().getTime().toString(), todoName: todoName, done: false};
        this.todoList.unshift(item);
      },
      checkAll(allChecked){
        if (allChecked){
          this.todoList.forEach((item)=>{
            item.done = true
          });
        } else {
          this.todoList.forEach((item)=>{
            item.done = false
          });
        }
      },
      deleteAll(){
        this.todoList = [];
      }
    },
    components: {
      TodoTop,
      TodoList,
      TodoBottom
    },
    computed: {
      numchecked(){
        return this.todoList.reduce((pre, todo)=>{
          return pre + (todo.done ? 1 : 0);
        },0);
      },
      totalnum(){
        return this.todoList.length
      }
    },
    watch: {
      todoList: {
        deep: true,
        handler(newvalue){
          localStorage.setItem("todoList", JSON.stringify(newvalue));
        }
      }
    },
    mounted(){
      this.$refs.TodoTop.$on("addItem",this.addItem);
    }
  }
</script>

<style>
  /* global */
  .container{
    border-radius: 8px;
    border: 1px solid gray;
    padding: 12px;
    width: 400px;
    margin: auto;
    margin-top: 40px;
  }
  input[type=checkbox]{
    cursor: pointer;
  }
</style>