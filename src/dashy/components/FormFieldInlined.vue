<template>
	<div class="field is-inlined">
		
		<!--  -->
		<slot name="label"></slot>
		
		<div class="control" :class="{'has-error': error ? true : false}">
			
			<!--  -->
			<slot></slot>
			

			<p v-if="error" class="form-error">{{ error }}</p>
		</div>
	</div>
</template>

<script>

export default {
	name: "FormFieldInlined",
	props: {
		error: {
			type: String,
			default: "",
		}
	},

	data() {
		return {
		}
	},
}
</script>