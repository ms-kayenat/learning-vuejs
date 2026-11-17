<script setup>
const props = defineProps({
	buttonClass: {
		type: String,
		default: '',
	},
	isLoading: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: 'button',
	},
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
	if (!props.isLoading && !props.disabled) {
		emit('click', event);
	}
};
</script>

<template>
	<button
		:type="type"
		:class="['button', buttonClass, { 'is-loading': isLoading }]"
		:disabled="disabled || isLoading"
		@click="handleClick"
	>
		<slot>Button</slot>
	</button>
</template>
