<script setup>
import { ref, getCurrentInstance } from 'vue';
import CampaignForm from '@/components/campaign/CampaignForm.vue';
import { CampaignModel } from '@/models/CampaignModel.js';

const campaign = ref({ ...CampaignModel });
const validationError = ref({});
const isProcessing = ref(false);

const onCreateCampaign = () => {
};

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Create Campaign</h1>
		</div>
	</div>

	<CampaignForm
		:processing="isProcessing"
		:campaign="campaign"
		:error="validationError"
		@on-save="onCreateCampaign"
	/>
</template>