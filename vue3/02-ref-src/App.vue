<template>
  <h1>个人介绍</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <button @click="sayHello">say hi</button>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    
  },
  setup(){
    const name = ref("arki");

    const age = ref(3);

    const sayHello = function(){
      alert(`${name.value} says hi ${age.value}`);
    }
    
    return {
      name,
      age,
      sayHello
    }
  }
}
</script>

<style>

</style>
