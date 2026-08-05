<template>
	<a class="button" :class="{'is-loading': loading}">
		<slot></slot>
	</a>
</template>

<script>

export default {
	name: "ButtonAnchor",
	props: {
		loading: {
			type: Boolean,
			default: false,
		}
	},
}
</script>