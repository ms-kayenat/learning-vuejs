<template>
	<button class="button" :class="{'is-loading': loading}">
		<slot></slot>
	</button>
</template>

<script>

export default {
	name: "Button",
	props: {
		loading: {
			type: Boolean,
			default: false,
		}
	},
}
</script>