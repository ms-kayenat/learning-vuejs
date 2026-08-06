<script setup>
import { ref } from 'vue'

const cardColors = ['#2B203E','#10233F','#4A6A63']
const circleColors = ['#B6F5D8','#FFE5E9','#DAD2FF']

const selectedCardColor = ref(cardColors[0])
const selectedCircleColor = ref(circleColors[0])

const changeCardColor = (color) => {
  selectedCardColor.value = color
}

const changeCircleColor = (color) => {
  selectedCircleColor.value = color
}
</script>

<template>
  <div class="theme-customizer">
    <div class="top-section">
      <div class="palette-box">
        <h3>Card Color</h3>
        <div class="color-list">
          <div v-for="color in cardColors" :key="color" class="color-item" :style="{ backgroundColor: color }"
            @click="changeCardColor(color)" />
        </div>
      </div>
      <div class="palette-box">
        <h3>Circle Color</h3>
        <div class="color-list">
          <div v-for="color in circleColors" :key="color" class="color-item" :style="{ backgroundColor: color }"
            @click="changeCircleColor(color)" />
        </div>
      </div>
    </div>
    <div class="preview-card" :style="{ backgroundColor: selectedCardColor }">
      <div class="preview-circle" :style="{ backgroundColor: selectedCircleColor }" />
    </div>
  </div>
</template>

<style scoped>
.theme-customizer {
  padding: 24px;
}

.top-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.palette-box {
  background: #f8fafc;
  border-radius: 20px;
  padding: 24px;
}

.color-list {
  display: flex;
  gap: 12px;
}

.color-item {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  cursor: pointer;
}

.preview-card {
  margin-top: 24px;
  height: 400px;
  border-radius: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;
}

.preview-circle {
  width: 90px;
  height: 90px;
  border-radius: 50%;

  transition: 0.3s;
}
</style>