<script setup>
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <router-view/>
  

   
</template>

<style> 
* {   /* Сбрасываем дефолтное форматирование и подкидываем нормальный шрифт */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
</style>
