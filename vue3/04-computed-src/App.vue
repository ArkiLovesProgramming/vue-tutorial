<template>
  <h1>个人介绍</h1>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>job: {{job}}</h2>
  <h2>hobby: {{hobby}}</h2>
  <button @click="sayHello">say hi</button>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  name: 'App',
  components: {
    
  },
  setup(){
    const firstname = ref("arki");

    const lastname = ref("wang");

    const name = computed({
      get(){
        return firstname.value + " " + lastname.value;
      },
      set(value){
        let names = value.split(" ");
        firstname.value = names[0];
        lastname.value = names[1];
      }
    })

    console.log(name);

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
      firstname,
      lastname,
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
