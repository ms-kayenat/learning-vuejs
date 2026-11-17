<script setup>
import { ref } from 'vue';
import AppButton from '@/components/faizan/AppButton.vue';

const clickCount = ref(0);
const isLoading = ref(false);
const statusMessage = ref('');

const handleButtonClick = (buttonName) => {
	clickCount.value++;
	statusMessage.value = `Clicked: ${buttonName}`;
};

const simulateLoading = () => {
	if (isLoading.value) return;
	isLoading.value = true;
	statusMessage.value = 'Processing request...';

	setTimeout(() => {
		isLoading.value = false;
		clickCount.value++;
		statusMessage.value = 'Request completed successfully!';
	}, 2000);
};
</script>

<template>
	<div class="page-container" style="padding: 24px; max-width: 900px; margin: 0 auto;">
		<div style="margin-bottom: 24px;">
			<h1 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">
				Buttons
			</h1>
			<p style="color: #666; font-size: 14px;">
				Custom button components built with Vue 3 composition API.
			</p>
		</div>

		<div style="background: #FFFFFF; border: 1px solid #E4E4E7; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
			<p style="font-size: 14px; margin-bottom: 4px;">
				<strong>Clicks:</strong> {{ clickCount }}
			</p>
			<p v-if="statusMessage" style="font-size: 14px; color: #631CFD; font-weight: 500;">
				{{ statusMessage }}
			</p>
		</div>

		<div style="background: #FFFFFF; border: 1px solid #E4E4E7; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
			<h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">
				Variants
			</h3>
			<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
				<AppButton @click="handleButtonClick('Default Button')">
					Default
				</AppButton>

				<AppButton
					button-class="is-primary"
					@click="handleButtonClick('Primary Button')"
				>
					Primary
				</AppButton>

				<AppButton
					button-class="is-danger"
					@click="handleButtonClick('Danger Button')"
				>
					Danger
				</AppButton>

				<AppButton
					button-class="is-outlined"
					@click="handleButtonClick('Outlined Button')"
				>
					Outlined
				</AppButton>

				<AppButton
					button-class="is-primary"
					:disabled="true"
					@click="handleButtonClick('Disabled Button')"
				>
					Disabled
				</AppButton>
			</div>
		</div>

		<div style="background: #FFFFFF; border: 1px solid #E4E4E7; border-radius: 12px; padding: 20px;">
			<h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">
				Loading State
			</h3>
			<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
				<AppButton
					button-class="is-primary"
					:is-loading="isLoading"
					@click="simulateLoading"
				>
					{{ isLoading ? 'Processing...' : 'Simulate API Call' }}
				</AppButton>

				<AppButton
					button-class="is-danger"
					:is-loading="isLoading"
					@click="simulateLoading"
				>
					Danger Loading
				</AppButton>
			</div>
		</div>
	</div>
</template>
