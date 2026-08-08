<script setup>
import { ref } from 'vue'
import ThemeCustomizer from '@/components/ijaj/ThemeCustomizer.vue'

const cardColor = ref('#2B203E')
const circleColor = ref('#B6F5D8')
</script>

<template>
  <ThemeCustomizer
    :selected-card-color="cardColor"
    :selected-circle-color="circleColor"
    @update:cardColor="cardColor = $event"
    @update:circleColor="circleColor = $event"
  />
</template>