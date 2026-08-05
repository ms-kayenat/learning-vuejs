<template>
	<label class="checkbox">
		<input  @change="toggleCheckbox($event)" type="checkbox" :value="modelValue" :name="name" :id="id">
		<span class="checkbox-button"></span>
		<span class="checkbox-label">
			<slot></slot>
		</span>
	</label>
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
		id: {
			type: String,
			default: "",
		},
	},
	emits: ['update:modelValue'],

	methods: {
		toggleCheckbox($event) {
			console.log("OK", $event.target.value);
			this.$emit('update:modelValue', $event.target.value);
		},
	},
}
</script>