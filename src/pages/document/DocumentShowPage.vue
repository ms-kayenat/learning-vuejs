<script setup>
import { ref, onMounted } from 'vue'
import ButtonSelectCapsule from '@/dashy/components/ButtonSelectCapsule.vue'
import DocumentSingle from '@/components/document/DocumentSingle.vue'
import DocumentData from '@/data/DocumentData.json'

const props = defineProps({
	id: {
		type: String,
		required: true,
	}
});

const document = ref(null)
const isProcessing = ref(false);

const fetchDocumentById = (id) => {
	document.value = DocumentData.documents.find(a => a.id == id);
};

const actions = ref([
	{ action_name: "active", action_value: "Active" },
	{ action_name: "inactive", action_value: "Inactive" },
]);

const onActiveDocument = () => updateDocumentStatus("active", "Document active successfully");
const onInactiveDocument = () => updateDocumentStatus("Inactive", "Document Inactive successfully");

const updateDocumentStatus = (status, msg) => {
	//
}

onMounted(() => {
	fetchDocumentById(props.id)
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
					@active="onActiveDocument"
					@inactive="onInactiveDocument"
				/>
				<router-link :to="{name: 'document.edit', params: {id: props.id} }" class="button is-primary" 
					title="Edit Document">
					<span><i class="ri-edit-circle-line"></i></span>
				</router-link>
			</div>
		</div>
	</div>
	<DocumentSingle v-if="document" :document="document" />
</template>