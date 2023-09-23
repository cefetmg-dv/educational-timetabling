<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import router from './router/index.js'

export default {
  components: {
    RouterView,
    Navbar
  },
  mounted() {
    router.push('/')
  }
};
</script>


<template>
  <Navbar/>
  <div class="container-fluid">
    <RouterView/>
  </div>
</template>


<style>
</style>
