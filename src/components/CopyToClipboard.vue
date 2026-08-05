<script setup>
import { getCurrentInstance } from 'vue';

// Props
const props = defineProps({
  text: {
    type: [String, null],
    required: true
  }
});

// Access global properties from main.js
const { proxy } = getCurrentInstance();
const $toast = proxy.$toast;
const copyToClipboard = proxy.copyToClipboard;

// Method to copy text to clipboard
const copyTextToClipboard = (text) => {
  copyToClipboard(text);
  $toast("Copied to clipboard", { type: "success" });
};
</script>

<template>
  <div :style="{ alignItems: 'center', display: 'flex', gap: '2px', color: '#005AD4', }">
    <i v-if="text" @click="copyTextToClipboard(text)" class="ri-file-copy-line" style="cursor: pointer;"></i>
    <slot></slot>
  </div>
</template>