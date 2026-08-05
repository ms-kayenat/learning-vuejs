<script setup>
import CopyToClipboard from '@/dashy/components/CopyToClipboard.vue';
import ImageUploader from '@/components/ImageUploader.vue';

const props = defineProps({
	document: {
		type: [Object, null],
		required: true,
	},
});

</script>
<template>
	<div class="table">
		<div class="table-body">
			<div class="table-tbody">
				<div class="table-row">
					<div class="table-col">ID</div>
					<div class="table-col">
						<router-link :to="{name: 'document.show', params: {id: document.id}}">
							{{ document.id }}
						</router-link>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Name</div>
					<div class="table-col">
						{{ document.name }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Description</div>
					<div class="table-col">
						{{ document.description }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Required</div>
					<div class="table-col">
						{{ document.required }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Status</div>
					<div class="table-col">
						<span v-if="document.status == 1" class="tag is-success">Active</span>
						<span v-if="document.status == 2" class="tag is-success">Inactive</span>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Created At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(document.created_at) }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Updated At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(document.updated_at) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>