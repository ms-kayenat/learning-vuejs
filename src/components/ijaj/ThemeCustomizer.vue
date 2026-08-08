<script setup>
import ColorBox from './ColorBox.vue'

defineProps({
  selectedCardColor: {
    type: String,
    required: true
  },

  selectedCircleColor: {
    type: String,
    required: true
  }
})

const emit = defineEmits([
  'update:cardColor',
  'update:circleColor'
])

const cardColors = [
  '#2B203E',
  '#10233F',
  '#4A6A63'
]

const circleColors = [
  '#B6F5D8',
  '#FFE5E9',
  '#DAD2FF'
]
</script>

<template>
  <div class="theme-customizer">

    <div class="top-section">

      <!-- Card Colors -->

      <div class="palette-box">
        <h3>Card Color</h3>

        <div class="color-list">
          <ColorBox
            v-for="color in cardColors"
            :key="color"
            :color="color"
            @select="emit('update:cardColor', color)"
          />
        </div>
      </div>

      <!-- Circle Colors -->

      <div class="palette-box">
        <h3>Circle Color</h3>

        <div class="color-list">
          <ColorBox
            v-for="color in circleColors"
            :key="color"
            :color="color"
            @select="emit('update:circleColor', color)"
          />
        </div>
      </div>

    </div>

    <!-- Preview -->

    <div
      class="preview-card"
      :style="{ backgroundColor: selectedCardColor }"
    >
      <div
        class="preview-circle"
        :style="{ backgroundColor: selectedCircleColor }"
      />
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
  flex-wrap: wrap;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;

  transition: 0.3s;
}
</style>