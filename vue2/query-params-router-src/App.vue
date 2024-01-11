<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
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
  // import PageAbout from './components/PageAbout.vue';
  // import PageHome from './components/PageHome.vue';
  export default {
    name: "App",
    components: {
      // PageAbout,
      // PageHome
    }
  }
</script>

<style>
  
</style>