<script setup>
defineProps({
  loading: Boolean
})
</script>

<template>
  <button class="button" :disabled="loading">
    <slot v-if="!loading"></slot>
    <span v-else>Loading...</span>
  </button>
</template>