<script setup>
import Button from '@/dashy/components/Button.vue';
import Select from '@/dashy/components/Select.vue';
import FormFieldInlined from '@/dashy/components/FormFieldInlined.vue';
import Radio from '@/dashy/components/Radio.vue';

const props = defineProps({
	user: {
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
	emit('onSave', props.user);
};

</script>

<template>
	<form @submit.prevent="create" action="#" method="post">
		<div class="page-columns">
			<div style="width: 100%">
				<div class="form-palette">
					<div class="form-palette-body">

						<FormFieldInlined :error="error.first_name">
							<template #label>
								<label class="label" for="first_name">First Name</label>
							</template>
							<input class="input" type="text" id="first_name" placeholder="e.g. John" v-model="user.first_name"/>
						</FormFieldInlined>

						<FormFieldInlined :error="error.last_name">
							<template #label>
								<label class="label" for="last_name">Last Name</label>
							</template>
							<input class="input" type="text" id="last_name" placeholder="e.g. Doe" v-model="user.last_name"/>
						</FormFieldInlined>

						<FormFieldInlined :error="error.gender">
							<template v-slot:label>
								<label class="label" for="gender">Gender</label>
							</template>

							<div class="radios">
								<Radio name="gender" v-model="user.gender" :value="1">Male</Radio>
								<Radio name="gender" v-model="user.gender" :value="2">Female</Radio>
							</div>
						</FormFieldInlined>

						<FormFieldInlined :error="error.phone">
							<template #label>
								<label class="label" for="phone">Phone</label>
							</template>
							<input class="input" type="text" id="phone" placeholder="e.g. 933#######" maxlength="10" v-model="user.phone"/>
						</FormFieldInlined>

						<FormFieldInlined :error="error.email">
							<template #label>
								<label class="label" for="email">Email</label>
							</template>
							<input class="input" type="email" id="email" placeholder="e.g. you@example.coml" v-model="user.email"/>
						</FormFieldInlined>

						<FormFieldInlined :error="error.password">
							<template #label>
								<label class="label" for="password">Password</label>
							</template>
							<input class="input" type="password" id="password" placeholder="**********" v-model="user.password"/>
						</FormFieldInlined>

						<FormFieldInlined :error="error.status">
							<template #label>
								<label class="label" for="status">Status</label>
							</template>
							<Select v-model.number="user.status" id="status">
								<option value="1">Active</option>
								<option value="2">Inactive</option>
							</Select>
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
