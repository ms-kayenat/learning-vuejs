<template>
	<div class="switch">
		<input @change="onChange($event)" type="checkbox" :name="name" :id="id" :value="modelValue">
		<label :for="id"></label>
	</div>
</template>

<script>

export default {
	name: "Switch",
	props: {
		modelValue: {
			type: String
		},
		name: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			default: "",
		},
	},
	emits: ['update:modelValue'],

	methods: {
		onChange($event) {
			console.log("OK", $event.target.value);
			this.$emit('update:modelValue', $event.target.value);
		},
	},
}
</script>