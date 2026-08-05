<template>
	<div>
		<input type="text" @input="emitInput" :name="name" :value="modelValue">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: "Checkbox",
	props: {
		modelValue: {
			type: String
		},
		name: {
			type: String,
			default: "",
		},
	},
	emits: ['update:modelValue'],

	methods: {
		emitInput($event) {
			console.log("OK", $event.target.value);
			this.$emit('update:modelValue', $event.target.value);
		},
	},
}
</script>