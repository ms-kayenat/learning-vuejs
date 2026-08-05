<template>
	<div v-if="isOpen" @click="modalBodyClicked" class="modal">
		<div class="modal-container">
			<div class="modal-header">
				<h1 class="modal-title">{{ modalTitle }}</h1>
				<button @click="triggerCloseModalEvent" class="button modal-close">&times;</button>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: "Modal",
	props: {
		modalTitle: {
			type: String,
			default: "Modal Title",
		},
		isOpen: {
			type: Boolean,
			default: true,
		}
	},

	data() {
		return {
		}
	},

	methods: {
		modalBodyClicked(el) {
			if (el.target.classList.contains("modal")) {
				this.triggerCloseModalEvent();
			}
		},

		triggerCloseModalEvent() {
			this.$emit('closeClicked');
		}
	},
}
</script>