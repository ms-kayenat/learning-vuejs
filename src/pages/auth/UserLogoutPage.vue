<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore.js';
import { useRouter } from 'vue-router';

// Pinia Store
const authStore = useAuthStore();
const router = useRouter();

// Methods
const performLogout = () => {
  authStore.userLogout()
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      window.location = "/login"
    });
};

// Lifecycle Hooks
onMounted(() => {
  performLogout();
});
</script>

<template>
	
</template>