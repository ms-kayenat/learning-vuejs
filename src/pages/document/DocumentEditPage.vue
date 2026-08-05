<script setup>
import { ref, onMounted } from 'vue';
import DocumentForm from '@/components/document/DocumentForm.vue';
import DocumentData from '@/data/DocumentData.json';

const document = ref(null);
const validationError = ref({});
const isProcessing = ref(false);

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
});

const fetchDocumentById = (id) => {
	document.value = DocumentData.documents.find(d => d.id == props.id);
};

const onUpdateDocument = () => {
	//
};

onMounted(() => {
	fetchDocumentById(props.id);
});

</script>

<template>
	<div class="page-header">
		<div class="page-header-text">
			<h1 class="page-title">Edit Document</h1>
		</div>
	</div>

	<DocumentForm 
		v-if="document" 
		:document="document" 
		:processing="isProcessing" 
		:error="validationError"
		@on-save="onUpdateDocument"
	/>
</template>