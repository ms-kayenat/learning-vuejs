<script setup>
import { ref, getCurrentInstance } from 'vue';
import DocumentForm from '@/components/document/DocumentForm.vue';
import { DocumentModel } from '@/models/DocumentModel.js';

const document = ref({ ...DocumentModel });
const validationError = ref({});
const isProcessing = ref(false);

const onCreateDocument = () => {
};

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Create Document</h1>
		</div>
	</div>

	<DocumentForm
		:processing="isProcessing"
		:document="document"
		:error="validationError"
		@on-save="onCreateDocument"
	/>
</template>