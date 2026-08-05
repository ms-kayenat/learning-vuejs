<template>
	<label class="radio">
		<input @change="toggleRadio($event)" type="radio" :value="value" :name="name" :id="id" :checked="value == modelValue">
		<span class="radio-button"></span>
		<span class="radio-label">
			<slot></slot>
		</span>
	</label>
</template>

<script>

export default {
	name: "Radio",
	props: {
		modelValue: {
			type: [String, Number, Object]
		},
		value: {
			type: [String, Number, Object]
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
		toggleRadio($event) {
			console.log("OK", $event.target.value);
			this.$emit('update:modelValue', $event.target.value);
		},
	},
}
</script>