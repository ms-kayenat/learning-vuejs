<script setup>
import Button from '@/components/button/Button.vue'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <h2 style="font-size: 24px;">Button Components : </h2>
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <Button class="is-primary">Primary</Button>
      <Button class="is-secondary">Secondary</Button>
      <Button class="is-success">Success</Button>
      <Button class="is-danger">Danger</Button>
      <Button class="is-outline">Outline</Button>
      <!-- loading satate -->
      <Button class="is-primary" :loading="true">
        Button (loading true)
      </Button>
      <Button class="is-primary" :loading="false">
        Button (loading false)
      </Button>
    </div>
  </div>
</template>