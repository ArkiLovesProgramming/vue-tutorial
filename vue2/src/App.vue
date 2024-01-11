<template>
  <div class="container">
    <div class="row">
      <PageBanner/>
    </div>
    <div class="row">
      <div class="col-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-6">
        <div class="panel">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageBanner from './components/PageBanner.vue';
  export default {
    name: "App",
    components: {
      PageBanner
    }
  }
</script>

<style>
  
</style>