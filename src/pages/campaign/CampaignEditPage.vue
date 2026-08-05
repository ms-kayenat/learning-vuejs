<script setup>
import { ref, onMounted } from 'vue';
import CampaignForm from '@/components/campaign/CampaignForm.vue';
import CampaignData from '@/data/CampaignData.json';

const campaign = ref(null);
const validationError = ref({});
const isProcessing = ref(false);

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const fetchCampaignById = (id) => {
	campaign.value = CampaignData.campaigns.find(c => c.id == props.id);
};

const onUpdateCampaign = () => {
	//
};

onMounted(() => {
	fetchCampaignById(props.id);
});

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Edit Campaign</h1>
		</div>
	</div>

	<CampaignForm 
		v-if="campaign" 
		:campaign="campaign" 
		:processing="isProcessing" 
		:error="validationError"
		@on-save="onUpdateCampaign"
	/>
</template>