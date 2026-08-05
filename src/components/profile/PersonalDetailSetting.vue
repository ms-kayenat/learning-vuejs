<script setup>
import { defineProps, defineEmits } from 'vue';
import Button from '@/dashy/components/Button.vue';

// Define props
const props = defineProps({
	admin: {
		type: Object,
		required: true,
	},
	errors: {
		type: Object,
	},
	processing: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(['update-admin']);

const handleUpdate = () => {
	emit('update-admin');
};

</script>

<template>
	<div v-if="admin" class="profile-columns">
		<div class="profile-column">
			<div style="padding-right: .5rem;">
				<h1 style="font-size: 1.25rem; line-height: 1.75; color: #333333">Edit Personal Details</h1>
				<p style="font-size: .875rem; color: #888888">
					You can update your name, phone number, and email here.
				</p>
			</div>
		</div>
		<div class="profile-column">
			<form @submit.prevent="handleUpdate">
				<div class="form-palette">
					<div class="form-palette-body">
						<div class="field is-inlined">
							<label for="first_name" class="label">First name</label>
							<div :class="{'has-error': errors.first_name}" class="control">
								<input v-model="admin.first_name" id="first_name" class="input" type="text" placeholder="First name" name="first_name">
								<p class="form-error" v-if="errors.first_name">
									{{ errors.first_name }}
								</p>
							</div>
						</div>
						<div class="field is-inlined">
							<label for="last_name" class="label">Last name</label>
							<div :class="{'has-error': errors.last_name}" class="control">
								<input v-model="admin.last_name" id="last_name" class="input" type="text" placeholder="Last name" name="last_name">
								<p class="form-error" v-if="errors.last_name">
									{{ errors.last_name }}
								</p>
							</div>
						</div>
						<div class="field is-inlined">
							<label for="phone" class="label">Phone</label>
							<div :class="{'has-error': errors.phone}" class="control">
								<input v-model.number="admin.phone" id="phone" class="input" type="text" placeholder="Phone number" name="phone" maxlength="10">
								<p class="form-error" v-if="errors.phone">
									{{ errors.phone }}
								</p>
							</div>
						</div>
						<div class="field is-inlined">
							<label for="email" class="label">Email</label>
							<div :class="{'has-error': errors.email}" class="control">
								<input v-model="admin.email" id="email" class="input" type="text" placeholder="Email " name="email">
								<p class="form-error" v-if="errors.email">
									{{ errors.email }}
								</p>
							</div>
						</div>
					</div>
					<div class="form-palette-footer">
						<Button type="submit" :loading="processing" class="is-primary">Save</Button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>





