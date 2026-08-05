<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';

// Pinia Store
const authStore = useAuthStore();
const router = useRouter();

// Methods
const boot = () => {
  if (authStore.isAdmin()) {
    router.push({ name: 'dashboard' });
    return;
  }


  const admin = authStore.getAdmin();
  if (!admin) {
    router.push({ name: 'auth.logout' });
    return;
  }
};

// Lifecycle Hooks
onMounted(() => {
  boot();
});
</script>

<template>
	<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
		<div class="spinner is-large"></div>
	</div>
</template>