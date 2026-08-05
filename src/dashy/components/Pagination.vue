<template>
	<nav class="pagination is-left">
		<div class="pagination-left">
			<button @click="emitPrevPage" class="button">
				<i class="ri-arrow-left-s-line"></i>
			</button>
		</div>
		<div class="pagination-body">
			<router-link :to="`${baseUrl}?${queryParamsGenerate}`" class="button is-active">{{ page }}</router-link>
		</div>
		<div class="pagination-right">
			<button @click="emitNextPage" class="button">
				<i class="ri-arrow-right-s-line"></i>
			</button>
		</div>
	</nav>
</template>

<script>

export default {
	name: "Pagination",
	props: {
		itemCount: {
			type: Number,
			required: true,
		},
		page: {
			type: Number,
			default: 1,
		},
		pageParamName: {
			type: String,
			default: 'page',
		},
		baseUrl: {
			type: String,
		},
		queryParams: {
			type: String,
			default: "",
		},
	},
	methods: {
		emitPrevPage() {
			if (this.page > 1) {
				this.$emit('onPrevPage');
			}
		},

		emitNextPage() {
			if (this.itemCount !== 0) {
				this.$emit('onNextPage');
			}
		},
	},
	computed: {
		queryParamsGenerate() {
			return this.queryParams
				? `${this.pageParamName}=${this.page}&${this.queryParams}`
				: `${this.pageParamName}=${this.page}`;
		},
	},
}
</script>