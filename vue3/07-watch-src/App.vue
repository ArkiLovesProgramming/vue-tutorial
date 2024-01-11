<template>
  <div class="part1">
    <h1>个人介绍</h1>
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <h2>job: {{job}}</h2>
    <h2>hobby: {{hobby}}</h2>
    <button @click="sayHello">say hi</button>
  </div>
  <div class="part1">
    <children @hello="hello" :name="name"/>
  </div>
  <div class="part1">
    <TestWatch/>
  </div>
</template>

<script>
  // import { computed, reactive, ref } from 'vue';
  import useDisplay from './hooks/useDisplay.js';
  import Children from './components/Children.vue';
  import TestWatch from './components/TestWatch.vue';

  export default {
    name: 'App',
    components: {
      Children,
      TestWatch
    },
    setup(){

      const display = useDisplay();

      let hello = function(value){
        console.log(value)
        alert(`你好啊，你触发了hello事件，我收到的参数是:${value}`)
      }

      let name = "arki";

      return {
        ...display,
        name,
        hello
      }
    }
  }
</script>

<style>
.part1{
  padding: 10px;
  box-shadow: -1px -1px 5px black;
  margin: 10px 0px;
}

</style>
