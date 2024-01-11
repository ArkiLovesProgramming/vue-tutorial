<template>
  <div class="container">
    <button class="btn btn-danger" @click="xhrRequest">XhrRequest</button>
    <div>{{user}}</div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "App",
    data(){
      return {
        user: {}
      }
    },
    methods: {
      //Due to same origin policy, we can't gain data from server on another host. So we 
      //have to configure proxy server on vue-cli. Vue-cli provide us with a built-in 
      //proxy server
      xhrRequest(){
        axios.get("http://localhost:8083/api/data").then(
          response=>{
            console.log(response.data);
            this.user = response.data;
          },
          error=>{
            console.log(`error! ${error}`);
          }
        )
      }
    }
  }
</script>

<style>
  
</style>