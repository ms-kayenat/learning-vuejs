<script setup>
import Button from '@/dashy/components/Button.vue';
import Select from '@/dashy/components/Select.vue';
import FormFieldInlined from '@/dashy/components/FormFieldInlined.vue';
import FileUploader from '@/dashy/components/FileUploader.vue';

const props = defineProps({
	campaign: {
		type: [Object, null],
		required: true,
	},
	error: {},
	processing: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits([ 'onSave', 'onFileSelect' ]);
</script>

<template>
	<form @submit.prevent="emit('onSave')" method="post">
		<div class="page-columns">
			<div style="width: 100%">
				<div class="form-palette">
					<div class="form-palette-body">
						<FormFieldInlined :error="error.title">
							<template v-slot:label>
								<label class="label" for="title">Title</label>
							</template>
							<input class="input" type="text" title="title" id="title" placeholder="e.g. Lead collection" v-model="campaign.title">
						</FormFieldInlined>
						<FormFieldInlined :error="error.description">
							<template v-slot:label>
								<label class="label" for="description">Description</label>
							</template>
							<textarea class="textarea" type="text" name="description" id="description" placeholder="Description..." v-model="campaign.description"></textarea>
						</FormFieldInlined>
						<FormFieldInlined :error="error.did">
							<template v-slot:label>
								<label class="label" for="did">DID</label>
							</template>
							<input class="input" type="text" did="did" id="did" placeholder="e.g. 8100001234" v-model="campaign.did">
						</FormFieldInlined>
						<FormFieldInlined :error="error.utm_source">
							<template v-slot:label>
								<label class="label" for="utm_source">Utm Source</label>
							</template>
							<input class="input" type="text" utm_source="utm_source" id="utm_source" placeholder="e.g. Google" v-model="campaign.utm_source">
						</FormFieldInlined>
						<FormFieldInlined :error="error.status">
							<template #label>
								<label class="label" for="status">Status</label>
							</template>
							<Select v-model.number="campaign.status" id="status" style="display: block;">
								<option value="0">Postable</option>
								<option value="1">Non Postable</option>
							</Select>
						</FormFieldInlined>
						<FormFieldInlined :error="error.image">
							<template v-slot:label>
								<label class="label" for="image">Upload Image</label>
							</template>
							<FileUploader @change="$emit('onFileSelect', $event)" />
						</FormFieldInlined>
					</div>
						<div class="form-palette-footer">
							<Button :loading="processing" class="is-primary">Save</Button>
						</div>
				</div>
			</div>
		</div>
	</form>
</template>