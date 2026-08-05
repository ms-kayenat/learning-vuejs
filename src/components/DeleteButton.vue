<script setup>
import Button from '@/dashy/components/Button.vue';

const props = defineProps({
	processing: {
		type: Boolean,
		required: true,
	},
});

</script>
<template>
	<Button class="delete-button" :loading="processing" style=" background-color: transparent; color: #FF1111; font-size: 20px;">
		<i v-if="!processing" class="ri-delete-bin-5-line"></i>
	</Button>
</template>
<style>
	.delete-button {
		position: inherit !important;
	}
	.delete-button.is-loading::after {
		content: "";
		border-color: #FF1111 transparent #FF1111 #FF1111;
	}
</style>