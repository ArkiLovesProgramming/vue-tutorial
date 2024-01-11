<template>
  <div class="container">
    <h2>To do</h2>
    <TodoTop/>
    <TodoList :todoList="todoList"/>
    <TodoBottom :numchecked="numchecked" :totalnum="totalnum"/>
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
      this.$bus.$on("addItem", this.addItem);
      this.$bus.$on("deleteItem", this.deleteItem);
      this.$bus.$on("checkItem", this.checkItem);
      this.$bus.$on("checkAll", this.checkAll);
      this.$bus.$on("deleteAll", this.deleteAll);
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