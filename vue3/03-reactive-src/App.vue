<template>
  <h1>个人介绍</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>job: {{job}}</h2>
  <h2>hobby: {{hobby}}</h2>
  <button @click="sayHello">say hi</button>
</template>

<script>
import { reactive, ref } from 'vue';

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

    const job = reactive({
      type: '前端工程师',
      salary: '30k',
      a: {
        b: {
          c: 1000
        }
      }
    })

    const hobby = reactive(['football', 'basketball'])

    console.log(hobby[0]);
    
    return {
      name,
      age,
      sayHello,
      job,
      hobby
    }
  }
}
</script>

<style>

</style>
