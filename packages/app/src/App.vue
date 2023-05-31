<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import HomePage from './views/HomePage.vue'
</script>

<template>  
  <div id="#app">
    <header>
      <Navbar/>
    </header>
    <main>
      <HomePage/>
      <RouterView/>
    </main>
    
  </div>
</template>


<style>

  div#app{
    padding: 0;
    margin: 0;
    min-width: 100%;
  }

</style>