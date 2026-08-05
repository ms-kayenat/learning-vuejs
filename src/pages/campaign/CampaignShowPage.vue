<script setup>
import { ref, onMounted } from 'vue'
import ButtonSelectCapsule from '@/dashy/components/ButtonSelectCapsule.vue'
import CampaignSingle from '@/components/campaign/CampaignSingle.vue'
import CampaignData from '@/data/CampaignData.json'

const props = defineProps({
	id: {
		type: String,
		required: true,
	}
});

const campaign = ref(null)
const isProcessing = ref(false);

const fetchCampaignById = (id) => {
	campaign.value = CampaignData.campaigns.find(a => a.id == id);
};

const actions = ref([
	{ action_name: "active", action_value: "Active" },
	{ action_name: "inactive", action_value: "Inactive" },
]);

const onActiveCampaign = () => updateCampaignStatus("Active", "Campaign active successfully");
const onInactiveCampaign = () => updateCampaignStatus("Inactive", "Campaign inactive successfully");

const updateAgentStatus = (status, msg) => {
	//
}

onMounted(() => {
  fetchCampaignById(props.id)
});
</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Campaign</h1>
		</div>
		<div class="page-header-cta">
			<div class="inline-group">
				<ButtonSelectCapsule
					:actions="actions"
					:loading="isProcessing"
					@active="onActiveCampaign"
					@inative="onInactiveCampaign"
				/>
				<router-link :to="{name: 'campaign.edit', params: {id: props.id} }" class="button is-primary" title="Edit Campaign">
					<span><i class="ri-edit-circle-line"></i></span>
				</router-link>
			</div>
		</div>
	</div>
	<CampaignSingle v-if="campaign" :campaign="campaign" />
</template>