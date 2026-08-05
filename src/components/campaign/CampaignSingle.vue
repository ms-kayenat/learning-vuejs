<script setup>
import CopyToClipboard from '@/dashy/components/CopyToClipboard.vue';
import ImageUploader from '@/components/ImageUploader.vue';

const props = defineProps({
	campaign: {
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
					<div class="table-col"></div>
					<div class="table-col">
						<ImageUploader
							:id="campaign.id"
							:img-src="`${campaign.endpoint_url}`"
							@on-img-src-changed="campaign.endpoint_url = $event"
							style="max-width:40% ;">
						</ImageUploader>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">ID</div>
					<div class="table-col">
						<router-link :to="{name: 'campaign.show', params: {id: campaign.id}}">
							{{ campaign.id }}
						</router-link>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Title</div>
					<div class="table-col">
						{{ campaign.title }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Description</div>
					<div class="table-col">{{ campaign.description }}</div>
				</div>
				<div class="table-row">
					<div class="table-col">Did</div>
					<div class="table-col">{{ campaign.did }}</div>
				</div>
				<div class="table-row">
					<div class="table-col">Utm Source</div>
					<div class="table-col">{{ campaign.utm_source }}</div>
				</div>
				<div class="table-row">
					<div class="table-col">Status</div>
					<div class="table-col">
						<span v-if="campaign.status == 0" class="tag is-success">Active</span>
						<span v-if="campaign.status == 1" class="tag is-warning">Inactive</span>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Created At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(campaign.created_at) }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Updated At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(campaign.updated_at) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>