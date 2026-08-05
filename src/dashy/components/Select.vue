<template>
	<div class="select">
		<select @change="onSelect" :name="name" :id="id" :disabled="disabled">

			<option
				v-if="placeholder"
				value=""
				disabled
				:selected="modelValue === null || modelValue === undefined || modelValue === ''">
				{{ placeholder }}
			</option>

			<slot></slot>
		</select>
	</div>
</template>

<script>

export default {
	name: "Select",
	props: {
		modelValue: {
			default: null,
		},
		name: {
			type: String,
			default: "",
		},
		id: {
			type: String,
			default: "",
		},
		placeholder: {
			type: String,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],

	methods: {
		onSelect($event) {
			this.$emit('update:modelValue', $event.target.value);
		},
	},
}
</script>