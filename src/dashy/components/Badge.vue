<template>
	<div class="badge">
		{{ content }}
	</div>
</template>

<script>

export default {
	name: "Button",
	props: {
		data: {
			type: Number,
			default: 0,
		}
	},

	computed: {
		content() {
			return this.data > 99 ? "99+" : this.data;
		}
	},
}
</script>