<template>
    <button :class="textColor + ' ' + bgColor">dummy button {{textColor}} auf {{bgColor}}</button>
    <h2>Text</h2>
    <ul>
        <li @click="textColor = 'blue-text'">Blau</li>
        <li @click="textColor = 'green-text'">Grün</li>
        <li @click="textColor = 'red-text'">Rot</li>
        <li @click="textColor = 'white-text'">Weiss</li>
        <li @click="textColor = 'black-text'">Schwarz</li>
    </ul>
    <h2>Hintergrund</h2>
    <ul>
        <li @click="bgColor = 'blue-bg'">Blau</li>
        <li @click="bgColor = 'green-bg'">Grün</li>
        <li @click="bgColor = 'red-bg'">Rot</li>
        <li @click="bgColor = 'white-bg'">Weiss</li>
        <li @click="bgColor = 'black-bg'">Schwarz</li>
    </ul>
  </template>
  
  <script setup>
import { ref } from "vue"

  const bgColor = ref()
  const textColor = ref()

  </script>
  
  <style lang="scss" scoped>
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

  li{
    cursor: pointer;
  }

  button{
    width: 300px;
    height: 200px;
    font-size: 20px;
    font-weight: bold;
  }
  </style>