<template>
    <button :class="textColor + ' dummy ' + bgColor">dummy button</button>

    <br>
    <input type="text" placeholder="CSS-code"><br>
    <button>Add property</button>
  </template>
  
  <script setup>
import { ref } from "vue"

  const bgColor = ref()
  const textColor = ref()

  </script>
  
  <style>
  .black-text{
    color: black;
  }
  .white-text{
    color: white;
  }
  .blue-text{
    color: blue;
  }
  .green-text{
    color: green;
  }
  .red-text{
    color: red;
  }

  .black-bg{
    background-color: black;
  }
  .white-bg{
    background-color: white;
  }  
  .blue-bg{
    background-color: blue;
  }
  .green-bg{
    background-color: green;
  }
  .red-bg{
    background-color: red;
  }

  .dummy{
    width: 300px;
    height: 200px;
    font-size: 50px;
    font-weight: bold;
  }
  </style>