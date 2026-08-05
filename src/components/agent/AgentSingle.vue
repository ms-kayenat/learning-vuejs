<script setup>
import CopyToClipboard from '@/dashy/components/CopyToClipboard.vue';
import ImageUploader from '@/components/ImageUploader.vue';

const props = defineProps({
	agent: {
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
							:id="agent.id"
							:img-src="`${agent.image_url}`"
							@on-img-src-changed="agent.image_url = $event"
							style="max-width:40% ;">
						</ImageUploader>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">ID</div>
					<div class="table-col">
						<router-link :to="{name: 'agent.show', params: {id: agent.id}}">
							{{ agent.id }}
						</router-link>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Name</div>
					<div class="table-col">
						{{ `${agent.first_name} ${agent.last_name}` }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Agent Code</div>
					<div class="table-col">
						<CopyToClipboard :text="agent.agent_code">{{ agent.agent_code }}</CopyToClipboard>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Gender</div>
					<div class="table-col">
						<span v-if="agent.gender == 1" class="tag is-info">Male <i class="ri-men-line"></i></span>
						<span v-if="agent.gender == 2" class="tag is-warning">Female <i class="ri-women-line"></i></span>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Email</div>
					<div class="table-col">
						<CopyToClipboard :text="agent.email">{{ agent.email }}</CopyToClipboard>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Phone</div>
					<div class="table-col">
						<CopyToClipboard :text="agent.phone">
							{{ agent.phone }}
						</CopyToClipboard>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Status</div>
					<div class="table-col">
						<span v-if="agent.status == 1" class="tag is-success">Active</span>
						<span v-if="agent.status == 2" class="tag is-success">Inactive</span>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Created At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(agent.created_at) }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Updated At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(agent.updated_at) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>