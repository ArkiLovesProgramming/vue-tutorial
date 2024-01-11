<template>
  <h1>个人介绍</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <button @click="sayHello">say hi</button>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  setup(){
    const name = "arki";

    const age = 3;

    const sayHello = function(){
      alert(`${name} says hi ${age}`);
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
