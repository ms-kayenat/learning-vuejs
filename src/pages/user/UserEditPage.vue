<script setup>
import { ref, onMounted } from 'vue';
import UserForm from '@/components/user/UserForm.vue';
import UserData from '@/data/UserData.json';

const user = ref(null);
const validationError = ref({});
const isProcessing = ref(false);

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const fetchUserById = (id) => {
	user.value = UserData.users.find(u => u.id == props.id);
};

onMounted(() => {
	fetchUserById(props.id);
});

const onUpdateUser = () => {
	//
};

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Edit User</h1>
		</div>
	</div>

	<UserForm 
		v-if="user" 
		:user="user" 
		:processing="isProcessing" 
		:error="validationError"
		@on-save="onUpdateUser"
	/>
</template>