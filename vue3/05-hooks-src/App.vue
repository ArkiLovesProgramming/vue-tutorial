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
  import useDisplay from './hooks/useDisplay.js';

  export default {
    name: 'App',
    components: {
      
    },
    setup(){

      const display = useDisplay();

      return {
        ...display
      }
    }
  }
</script>

<style>

</style>
