<template>
  <div class="logo-maker">
    <div class="color-section">
      <div class="colors">
        <h3>Background Color</h3>
        <Box
          v-for="color in darkColors"
          :key="color"
          :color="color"
          @click="changeBackground(color)"
        />
      </div>
      <div class="colors">
        <h3>Foreground Color</h3>
        <Box
          v-for="color in lightColors"
          :key="color"
          :color="color"
          @click="changeForeground(color)"
        />
      </div>
    </div>
    <div
      class="preview"
      :style="{ backgroundColor: backgroundColor }"
    >
      <Circle :color="foregroundColor" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Box from '@/dashy/components/raihan/Box.vue'
import Circle from '@/dashy/components/raihan/Circle.vue'
const darkColors = [
  '#000000',
  '#333333',
  '#555555',
  '#666666',
  '#777777',
  '#999999'
]
const lightColors = [
  '#ffffff',
  '#ffeb3b',
  '#4caf50',
  '#2196f3',
  '#ff9800',
  '#e91e63'
]
const backgroundColor = ref('#000000')
const foregroundColor = ref('#ffffff')
const changeBackground = (color) => {
  backgroundColor.value = color
}
const changeForeground = (color) => {
  foregroundColor.value = color
}
</script>
<style scoped>
.logo-maker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 32px;
}
.color-section {
  display: flex;
  gap: 60px;
}
.colors {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 180px;
}
.colors h3 {
  width: 100%;
  margin-bottom: 8px;
}
.preview {
  width: 100%;
  max-width: 252px;
  min-height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #ccc;
}
</style>