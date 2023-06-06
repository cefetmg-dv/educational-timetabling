<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>

<template>  

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet"/>
  
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