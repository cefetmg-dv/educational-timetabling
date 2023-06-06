<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>  
  <div id="#app">
  
    <Navbar/>
  
    <RouterView/>
  
  </div>
</template>


<style>

  div#app{
    padding: 0;
    margin: 0;
    min-width: 100%;
    
  }
  *{
    font-family: Poppins, "Open sans", sans-serif;
  }

</style>