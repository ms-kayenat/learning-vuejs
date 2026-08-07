<template>
  <div
    class="circle"
    :style="{ backgroundColor: color }"
  ></div>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: '#fff'
  }
})
</script>
<style scoped>
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>