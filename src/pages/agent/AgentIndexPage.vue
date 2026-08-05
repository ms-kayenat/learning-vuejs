<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '@/dashy/components/Button.vue';

import AgentIndexTable from '@/components/agent/AgentIndexTable.vue';

import AgentData from '@/data/AgentData.json'

const route = useRoute();
const router = useRouter();

const agents = ref(AgentData.agents);
const page = ref(1);

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Agents</h1>
		</div>
		<div class="page-header-cta">
			<div class="inline-group">
				<Button class="button is-warning" title="Download Agent Report">
					<span><i class="ri-download-cloud-line"></i></span>
				</Button>

				<router-link :to="{name: 'agent.create'}" class="button is-primary">New Agent</router-link>
			</div>
		</div>
	</div>

	<AgentIndexTable
		:agents="agents"
		:page="page"
	/>
</template>