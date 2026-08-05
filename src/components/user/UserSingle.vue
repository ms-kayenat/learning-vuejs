<script setup>
import CopyToClipboard from '@/dashy/components/CopyToClipboard.vue';

const props = defineProps({
	user: {
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
						<div class="card" style="max-width: 400px;">
							<img :src="user.image_url" alt="" class="card-image">
							<div class="card-header"></div>
							<div class="card-body"></div>
						</div>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">ID</div>
					<div class="table-col">
						<router-link :to="{name: 'user.show', params: {id: user.id}}">
							{{ user.id }}
						</router-link>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Name</div>
					<div class="table-col">
						{{ `${user.first_name} ${user.last_name}` }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Gender</div>
					<div class="table-col">
						<span v-if="user.gender == 1" class="tag is-info">Male <i class="ri-men-line"></i></span>
						<span v-if="user.gender == 2" class="tag is-warning">Female <i class="ri-women-line"></i></span>
						<span v-if="user.gender == 3" class="tag is-danger">Other <i class="ri-genderless-line"></i></span>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Email</div>
					<div class="table-col">
						<CopyToClipboard :text="user.email">{{ user.email }}</CopyToClipboard>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Phone</div>
					<div class="table-col">
						<CopyToClipboard :text="user.phone">
							{{ user.phone }}
						</CopyToClipboard>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Status</div>
					<div class="table-col">
						<span v-if="user.status == 1" class="tag">Created</span>
						<span v-if="user.status == 2" class="tag is-success">Active</span>
						<span v-if="user.status == 3" class="tag is-warning">Inactive</span>
						<span v-if="user.status == 4" class="tag is-danger">Blocked</span>
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Created At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(user.created_at) }}
					</div>
				</div>
				<div class="table-row">
					<div class="table-col">Updated At</div>
					<div class="table-col">
						{{ readableFormattedLongDateWithMeridiem(user.updated_at) }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>