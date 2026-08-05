<script setup>
import { ref, defineProps } from 'vue';
import ImageUploader from '@/components/ImageUploader.vue';

const props = defineProps({
  admin: {
    type: [Object, null],
  },
});

const baseUrl = ref({});

const emit = defineEmits(['onAdminImageUpdated']);

const handleImageChange = (newImageUrl) => {
  props.admin.image_url = newImageUrl;

  emit('onAdminImageUpdated', {
    ...props.admin,
    image_url: newImageUrl
  });
};

</script>

<template>
  <div v-if="admin" class="profile-columns">
    <div class="profile-column">
      <div style="padding-right: .5rem;">
        <h1 style="font-size: 1.25rem; line-height: 1.75; color: #333333">Profile Photo</h1>
        <p style="font-size: .875rem; color: #888888">
          Upload your profile photo here.
        </p>
      </div>
    </div>
    <div class="profile-column">
      <form action="" method="post">
        <div class="form-palette">
          <div class="form-palette-body">
            <div style="display: flex; align-items: center; justify-content: flex-end; margin-bottom: .5rem;">
              <ImageUploader
                :id="admin.id"
                :post-url="`/api/v1/admins/upload`"
                :img-src="`${admin.image_url}`"
                @on-img-src-changed="handleImageChange"
                style="width: 300px;">
              </ImageUploader>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>