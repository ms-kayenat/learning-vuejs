<template>
	<input class="button" :class="{'is-loading': loading}">
</template>

<script>

export default {
	name: "ButtonInput",
	props: {
		loading: {
			type: Boolean,
			default: false,
		},
	},
}
</script>