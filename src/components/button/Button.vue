<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button class="button" :disabled="props.loading">
    <slot v-if="!props.loading"></slot>
    <span v-else>Loading...</span>
  </button>
</template>