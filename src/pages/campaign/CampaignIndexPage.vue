<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '@/dashy/components/Button.vue';

import CampaignIndexTable from '@/components/campaign/CampaignIndexTable.vue';

import CampaignData from '@/data/CampaignData.json'

const route = useRoute();
const router = useRouter();

const campaigns = ref(CampaignData.campaigns);
const page = ref(1);

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Campaigns</h1>
		</div>
		<div class="page-header-cta">
			<div class="inline-group">
				<router-link :to="{name: 'campaign.create'}" class="button is-primary">New Campaign</router-link>
			</div>
		</div>
	</div>

	<CampaignIndexTable
		:campaigns="campaigns"
		:page="page"
	/>
</template>