<template>
  <div class="container">
    <SearchTop/>
    <ResultList/>
  </div>
</template>

<script>
  // import axios from "axios";
  import ResultList from "./components/ResultList.vue"
  import SearchTop from "./components/SearchTop.vue"
  export default {
    name: "App",
    components: {
      ResultList,
      SearchTop
    }
  }
</script>

<style>
  
</style>