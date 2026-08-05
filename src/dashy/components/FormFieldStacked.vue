<template>
	<div class="field">
		
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
	name: "FormFieldStacked",
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