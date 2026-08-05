<template>
	<div class="button-capsule">
		<slot name="left-shell"></slot>
		<slot name="right-shell"></slot>
	</div>
</template>

<script>

export default {
	name: "ButtonCapsule",
	props: {
	},
}
</script>