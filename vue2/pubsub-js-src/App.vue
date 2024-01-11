<template>
  <div class="container">
    <img src="./assets/logo.png"/>
    <h2>To do</h2>
    <TodoTop/>
    <TodoList :todoList="todoList"/>
    <TodoBottom :numchecked="numchecked" :totalnum="totalnum"/>
  </div>
</template>

<script>
  import PubSub from "pubsub-js";  //third-party resource is typically introduced before local component
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
      deleteItem(_, id){
        this.todoList = this.todoList.filter((item)=>item.id != id);
      },
      checkItem(_, id){
        this.todoList.forEach((item)=>{
          if (item.id == id) item.done = !item.done;
        });
      },
      addItem(_, todoName){
        let item = {id: new Date().getTime().toString(), todoName: todoName, done: false};
        this.todoList.unshift(item);
      },
      checkAll(_, allChecked){
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
      this.addItemId = PubSub.subscribe('addItem',this.addItem); //订阅消息
      this.deleteItemId = PubSub.subscribe('deleteItem', this.deleteItem);
      this.checkItemId = PubSub.subscribe('checkItem',this.checkItem);
      this.checkAllId = PubSub.subscribe('checkAll',this.checkAll);
      this.deleteAllId = PubSub.subscribe('deleteAll',this.deleteAll);
    },
    beforeDestroy(){
      PubSub.unsubscribe(this.addItemId);
      PubSub.unsubscribe(this.deleteItemId);
      PubSub.unsubscribe(this.checkItemId);
      PubSub.unsubscribe(this.checkAllId);
      PubSub.unsubscribe(this.deleteAllId);
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
  img{
    height: 40px;
  }
  h2{
    margin-top: 0px;
  }
</style>