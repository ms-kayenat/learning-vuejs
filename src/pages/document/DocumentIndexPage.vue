<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import DocumentIndexTable from '@/components/document/DocumentIndexTable.vue';

import DocumentData from '@/data/DocumentData.json'

const route = useRoute();
const router = useRouter();

const documents = ref(DocumentData.documents);
const deletingId = ref(null);
const page = ref(1);

const onDeleteDocument = (docuemt) => {
}

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Documents</h1>
		</div>
		<div class="page-header-cta">
			<div class="inline-group">
				<router-link :to="{name: 'document.create'}" class="button is-primary">New Document</router-link>
			</div>
		</div>
	</div>

	<DocumentIndexTable
		:documents="documents"
		:deleting-id="deletingId"
		:page="page"
		@on-delete-document="onDeleteDocument"
	/>
</template>