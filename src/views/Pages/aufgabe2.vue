<template>
    <button>dummy button</button>

    <br>
    <input type="text" placeholder="CSS-code"><br>
    <button @click="addProperty">Add property</button>
  </template>
  
  <script setup>
  import { ref } from "vue"

  const bgColor = ref()
  const textColor = ref() 

  function addProperty(){
    
  }
  </script>
  
  <style scoped lang="scss">

  </style>