<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import UserIndexTable from '@/components/user/UserIndexTable.vue';

import UserData from '@/data/UserData.json'

const route = useRoute();
const router = useRouter();

const users = ref(UserData.users);
const page = ref(1);

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Users</h1>
		</div>
		<div class="page-header-cta">
			<router-link :to="{name: 'user.create'}" class="button is-primary">New User</router-link>
		</div>
	</div>

	<UserIndexTable
		:users="users"
		:page="page"
	/>
</template>
