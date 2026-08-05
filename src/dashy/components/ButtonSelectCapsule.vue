<template>
	<div class="button-capsule">
		<div class="select is-capsule-left-shell">
			<select v-model="selectedAction" name="left_shell" id="left_shell" class="is-capsule-left-shell">
				<option value="" disabled="" selected="">Select action</option>
				<option v-for="(a, index) in actions" :value="a.action_name" :key="index">{{ a.action_value }}</option>
			</select>
		</div>
		<button @click="onClick" :class="{'is-loading': loading}" class="button is-primary is-capsule-right-shell">
			<span><i class="ri-play-fill"></i></span>
		</button>
	</div>
</template>

<script>

export default {
	name: "ButtonSelectCapsule",
	props: {
		// Array of objects
		//  [{ action_name: "", action_value: "" }, ...]
		// action_name will be the event name that will be emitted
		actions: {
			type: Array
		},

		loading: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			selectedAction: "",
		}
	},

	methods: {
		onClick() {
			this.$emit(this.selectedAction, this.selectedAction);
		},
	},
}
</script>