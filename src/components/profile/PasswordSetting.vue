<script setup>
import { ref } from 'vue';
import Button from '@/dashy/components/Button.vue'
import FormFieldInlined from '@/dashy/components/FormFieldInlined.vue'

const props = defineProps({
  errors: Object,
  password: Object,
  processing: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['updatePassword']);

const handleUpdate = () => {
  emit('updatePassword', props.password);
};
</script>

<template>
	<div  v-if="password" class="profile-columns">
		<div class="profile-column">
			<div style="padding-right: .5rem;">
				<h1 style="font-size: 1.25rem; line-height: 1.75; color: #333333">Password Settings</h1>
				<p style="font-size: .875rem; color: #888888">
					You can change your password here.
				</p>
			</div>
		</div>
		<div class="profile-column">
			<form @submit.prevent="handleUpdate" method="post">
				<div class="form-palette">
					<div class="form-palette-body">
						<FormFieldInlined :error="errors.current_password">
							<template v-slot:label>
								<label class="label" for="current_password">Current Password</label>
							</template>
							<input class="input" type="password" name="current_password" id="current_password" placeholder="********" v-model="password.current_password">
						</FormFieldInlined>
						<FormFieldInlined :error="errors.new_password">
							<template v-slot:label>
								<label class="label" for="new_password">New Password</label>
							</template>
							<input class="input" type="password" name="new_password" id="new_password" placeholder="********" v-model="password.new_password">
						</FormFieldInlined>
						<FormFieldInlined :error="errors.confirm_password">
							<template v-slot:label>
								<label class="label" for="confirm_password">Confirm Password</label>
							</template>
							<input class="input" type="password" name="confirm_password" id="confirm_password" placeholder="********" v-model="password.confirm_password">
						</FormFieldInlined>

					</div>
					<div class="form-palette-footer">
						<Button type="submit" :loading="processing" class="is-primary">Save</Button>
					</div>
				</div>

			</form>
		</div>
	</div>
</template>