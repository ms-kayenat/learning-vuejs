<script setup>
import { ref, getCurrentInstance } from 'vue';
import UserForm from '@/components/user/UserForm.vue';
import { UserModel } from '@/models/UserModel.js';

const user = ref({ ...UserModel });
const validationError = ref({});
const isProcessing = ref(false);

const onCreateUser = () => {
};

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Create User</h1>
		</div>
	</div>

	<UserForm
		:processing="isProcessing"
		:user="user"
		:error="validationError"
		@on-save="onCreateUser"
	/>
</template>


