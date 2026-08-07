<template>
  <div
    class="box"
    :style="{ backgroundColor: color }"
    @click="$emit('click')"
  ></div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#000'
  }
})
defineEmits(['click'])
</script>
<style scoped>
.box {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
}
</style>