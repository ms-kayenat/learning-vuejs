<script setup>
import { ref, onMounted } from 'vue';
import UserForm from '@/components/user/UserForm.vue';
import AgentData from '@/data/AgentData.json';

const user = ref(null);
const validationError = ref({});
const isProcessing = ref(false);

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const fetchAgentById = (id) => {
	user.value = AgentData.agents.find(a => a.id == props.id);
};

onMounted(() => {
	fetchAgentById(props.id);
});

const onUpdateAgent = () => {
	//
};

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Edit Agent</h1>
		</div>
	</div>

	<UserForm 
		v-if="user" 
		:user="user" 
		:processing="isProcessing" 
		:error="validationError"
		@on-save="onUpdateAgent"
	/>
</template>