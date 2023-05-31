<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
    <Navbar />


    
    <RouterView />
</template>


<style>

  div#app{
    padding: 0;
    margin: 0;
  }

</style>