<script setup>
import { ref } from 'vue';
const darkColors = ref(['#251f37', '#0F172A', '#37514d']);
const lightColors = ref(['#A7F3D0', '#FFE4E6', '#DDD6FE']);

const crntBgColor = ref('#fff');
const crntCircleColor = ref('#fff');

function changeBgColor(color){
  crntBgColor.value = color;
}

function changeCircleColor(color){
  crntCircleColor.value = color;
}


</script>

<!-- temple start here -->
 <!-- appzillians work  -->
 <!-- work  , 2 boxes  left and right which includes color plattes , dark color boxes and light color box  ,, and a preview boxes , in priview box  a circle ,  if click right box dark color then priview box background change and when click left box .. chnage in circle in preview box .. -->
<template>

<div class="main-box">
  <div class="wrap">
    
    <div class="left">
      <!-- <div class="dark-colors"></div>
      <div class="dark-colors"></div>
      <div class="dark-colors"></div> -->
      <div class="dark-colors"  v-for="darkColor in darkColors" :style="{backgroundColor:darkColor}" @click="changeBgColor(darkColor)">{{ darkColor }}</div>

    </div>
    <div class="right">
      <!-- <div class="light-colors  "></div>
      <div class="light-colors "></div>
      <div class="light-colors "></div> -->
      <div class="light-colors" v-for="lightColor in lightColors" :style="{backgroundColor:lightColor}" @click="changeCircleColor(lightColor)">{{ lightColor }}</div>
    </div>
  </div>
  <div class="preview"  :style="{background:crntBgColor}">
    <div class="circle" :style="{background:crntCircleColor}"></div>
  </div>
</div>
 

</template>


<!-- styling scoped here  -->
<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 1px solid green;
}
.wrap{
  display: flex;
  gap:2rem;
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  height: 40%;
}

.left , .right{
  width: 50%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  /*  */
  justify-content: center;
  align-items: center;
}

/*  */

.preview{
  border: 1px solid red;
  width: 100%;
  height:60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
}

.light-colors , .dark-colors{
  width: 100px;
  height: 100px;
  border-radius: 1rem;
  border: 1px solid black;
}
/* 
.light-colors:nth-child(1){
  background-color: #A7F3D0;
}

.light-colors:nth-child(2){
  background-color: #FFE4E6;
}

.light-colors:nth-child(3){
  background-color: #DDD6FE;    
}


.dark-colors:nth-child(1){
  background-color: #251f37;
}

.dark-colors:nth-child(2){
  background-color: #0F172A;
}

.dark-colors:nth-child(3){
  background-color: #37514d;
} */



.main-box{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
}

body{
  padding:2rem;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
