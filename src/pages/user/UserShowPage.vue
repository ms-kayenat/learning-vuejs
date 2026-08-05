<script setup>
import { ref, onMounted } from 'vue'
import ButtonSelectCapsule from '@/dashy/components/ButtonSelectCapsule.vue'
import UserSingle from '@/components/user/UserSingle.vue'
import UserData from '@/data/UserData.json'

const props = defineProps({
	id: {
		type: String,
		required: true,
	}
});

const user = ref(null)
const isProcessing = ref(false);

const fetchUserById = (id) => {
	user.value = UserData.users.find(u => u.id == id);
};

const actions = ref([
	{ action_name: "active", action_value: "Active" },
	{ action_name: "inactive", action_value: "Inactive" },
	{ action_name: "block", action_value: "Block" },
]);

const onActiveUser = () => updateUserStatus("active", "User active successfully");

const onInactiveUser = () => updateUserStatus("inactive", "User inactive successfully");

const onBlockUser = () => updateUserStatus("block", "User block successfully");

const updateUserStatus = () => {
	//
}

onMounted(() => {
  fetchUserById(props.id)
});
</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">User</h1>
		</div>
		<div class="page-header-cta">
			<div class="inline-group">
				<ButtonSelectCapsule
					:actions="actions"
					:loading="isProcessing"
					@block="onBlockUser"
					@active="onActiveUser"
					@inactive="onInactiveUser"
				/>
				<router-link :to="{name: 'user.edit', params: {id: props.id}}" class="button is-primary" title="Edit User">
					<span><i class="ri-edit-circle-line"></i></span>
				</router-link>
			</div>
		</div>
	</div>
	<UserSingle v-if="user" :user="user" />
</template>