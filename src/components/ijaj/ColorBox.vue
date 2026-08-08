<script setup>
defineProps({
  color: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['select'])

const handleClick = () => {
  emit('select')
}
</script>

<template>
  <div
    class="color-item"
    :style="{ backgroundColor: color }"
    @click="handleClick"
  />
</template>

<style scoped>
.color-item {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-item:hover {
  transform: scale(1.05);
}
</style>