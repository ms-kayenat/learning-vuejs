<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore.js';
import { LoginModel } from '@/models/LoginModel.js';
import { axios } from '@/util/axios.js';
import { useRouter } from 'vue-router';

// Refs
const user = ref({ ...LoginModel });
const errorMessage = ref('');
const isProcessing = ref(false);

// Pinia Store
const authStore = useAuthStore();
const router = useRouter();

// Methods
const attemptLogin = () => {
  if (!user.value.email || !user.value.password) {
    return;
  }

  isProcessing.value = true;

  authStore.adminLogin(user.value.email, user.value.password)
    .then(() => {
      router.push({ name: 'dashboard' });
    })
    .catch((error) => {
      console.error(error);
      if (error.response.status === 422) {
        errorMessage.value = error.response.data.message;
      } else {
        errorMessage.value = 'Could not authenticate you. Try later.';
      }
    })
    .finally(() => {
      isProcessing.value = false;
    });
};

// Lifecycle Hooks
onMounted(() => {
  axios.get('/sanctum/csrf-cookie').then(() => {
    // CSRF cookie initialized
  });
});
</script>

<template>
	<form @submit.prevent="attemptLogin" class="login-layout" style="background-image: url('/assets/img/dashy-cover-bg.jpg')">
		<div class="login-layout-area">
			<div class="login-layout-container">
				<div class="login-box">
					<div class="login-head">
						<h1 class="page-title">Login</h1>
					</div>
					<div class="login-body">
						<div class="login-body-container">
							<div v-if="errorMessage" class="notification is-danger" style="margin-bottom: 1rem;">
								<p>{{ errorMessage }}</p>
							</div>
							<div class="field">
								<label for="email" class="label">Email</label>
								<div class="control">
									<input v-model="user.email" id="email" class="input" type="email" name="email" placeholder="you@somesite.com">
								</div>
							</div>
							<div class="field">
								<label for="password" class="label">Password</label>
								<div class="control">
									<input v-model="user.password" id="password" class="input" type="password" name="password" placeholder="********">
								</div>
							</div>
						</div>
					</div>
					<div class="login-foot">
						<button type="submit" :class="{'is-loading': isProcessing}" class="button is-primary">Login</button>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>