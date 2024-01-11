<template>
  <div class="part1">
    <Children/>
  </div>
</template>

<script>
  import { reactive, provide } from 'vue';
  import Children from './components/Children.vue';

  export default {
    name: 'App',
    components: {
      Children
    },
    setup(){
      let car = reactive({name:'奔驰',price:'40万'});
      let alertfun = function(){
        alert(`alert ${car.name}`)
      }
      provide('car', car);
      provide('alertfun', alertfun);
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
