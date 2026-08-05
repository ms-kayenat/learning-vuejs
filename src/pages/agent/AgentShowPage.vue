<script setup>
import { ref, onMounted } from 'vue'
import ButtonSelectCapsule from '@/dashy/components/ButtonSelectCapsule.vue'
import AgentSingle from '@/components/agent/AgentSingle.vue'
import AgentData from '@/data/AgentData.json'

const props = defineProps({
	id: {
		type: String,
		required: true,
	}
});

const agent = ref(null)
const isProcessing = ref(false);

const fetchAgentById = (id) => {
	agent.value = AgentData.agents.find(a => a.id == id);
};

const actions = ref([
	{ action_name: "active", action_value: "Active" },
	{ action_name: "inactive", action_value: "Inactive" },
]);

const onActiveAgent = () => updateAgentStatus("active", "Agent active successfully");
const onInactiveAgent = () => updateAgentStatus("Inactive", "Agent Inactive successfully");

const updateAgentStatus = (status, msg) => {
	//
}

onMounted(() => {
  fetchAgentById(props.id)
});
</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Agent</h1>
		</div>
		<div class="page-header-cta">
			<div class="inline-group">
				<ButtonSelectCapsule
					:actions="actions"
					:loading="isProcessing"
					@active="onActiveAgent"
					@inactive="onInactiveAgent"
				/>
				<router-link :to="{name: 'user.index' }" class="button is-warning">
					<span>
						<i class="ri-user-3-line"></i>
							Users
					</span>
				</router-link>
				<router-link :to="{name: 'agent.edit', params: {id: props.id} }" class="button is-primary" title="Edit Agent">
					<span><i class="ri-edit-circle-line"></i></span>
				</router-link>
			</div>
		</div>
	</div>
	<AgentSingle v-if="agent" :agent="agent" />
</template>