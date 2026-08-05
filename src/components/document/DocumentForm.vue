<script setup>
import Button from '@/dashy/components/Button.vue';
import Select from '@/dashy/components/Select.vue';
import FormFieldInlined from '@/dashy/components/FormFieldInlined.vue';
import Radio from '@/dashy/components/Radio.vue';

const props = defineProps({
	document: {
		type: [Object, null],
		required: true,
	},
	error: {},
	processing: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['onSave']);

const create = () => {
	emit('onSave', props.document);
};

</script>

<template>
	<form @submit.prevent="create" action="#" method="post">
		<div class="page-columns">
			<div style="width: 100%">
				<div class="form-palette">
					<div class="form-palette-body">

						<FormFieldInlined :error="error.name">
							<template #label>
								<label class="label" for="name">Name</label>
							</template>
							<input class="input" type="text" id="name" placeholder="e.g. Aadhaar Card" v-model="document.name"/>
						</FormFieldInlined>
						<FormFieldInlined :error="error.description">
							<template v-slot:label>
								<label class="label" for="description">Description</label>
							</template>
							<textarea class="textarea" type="text" name="description" id="description" placeholder="Description..." v-model="document.description"></textarea>
						</FormFieldInlined>

						<FormFieldInlined :error="error.required">
							<template v-slot:label>
								<label class="label" for="required">Required</label>
							</template>

							<div class="radios">
								<Radio name="required" v-model="document.required" :value="0">Yes</Radio>
								<Radio name="required" v-model="document.required" :value="1">No</Radio>
							</div>
						</FormFieldInlined>

					</div>
					<div class="form-palette-footer">
						<Button type="submit" :loading="processing" class="is-primary">Save</Button>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>
