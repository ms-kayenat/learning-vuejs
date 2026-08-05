<script setup>
import { ref, getCurrentInstance } from 'vue';
import ImageComp from '@/components/ImageComp.vue';
import { AxiosRequest } from '@/util/axios_request.js';

// Props
const props = defineProps({
  id: [String, Number],
  postUrl: {
    type: String,
  },
  imgSrc: {
    type: String,
    default: '',
  },
  maxImgSize: {
    type: [String, Number],
    default: 1024 * 100, // 100KB default
  },
  hideUploadButton: {
    type: Boolean,
    default:false,
  },
});

const emit = defineEmits(['onImgSrcChanged', 'onResponse']);

const image = ref(null);
const isUploading = ref(false);
const errorMsg = ref([]);
const successMsg = ref('');
const defaultMaxImageSize = 1024 * 100; // 100KB

const { proxy } = getCurrentInstance();
const $toast = proxy.$toast;
const flattenValidationErrors = proxy.flattenValidationErrors;

// Methods
const sendFile = () => {
  if (!image.value) {
    errorMsg.value.push("Please select an image.");
    $toast(errorMsg.value[0], { type: "error" });
    return;
  }

  errorMsg.value = [];
  successMsg.value = "";

  if (validate() === false) return;

  const url = props.postUrl;
  const data = new FormData();

  isUploading.value = true;
  data.append("id", props.id);
  data.append("photo", image.value);

  AxiosRequest.post(url, data,
    {
      success: successSaveImage,
      error: errorSaveImage,
      finally: finallySaveImage,
    },
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    }
  );
};

const successSaveImage = (response) => {
  successMsg.value = "Image uploaded successfully!";
  $toast(successMsg.value, { type: "success" });

  const keysToCheck = ['image_url', 'image', 'photo', 'photo_url', 'logo', 'logo_url', 'media_url'];
  for (const key of keysToCheck) {
    if (response.data?.[key]) {
      emit('onImgSrcChanged', response.data[key]);
    }
  }

  emit('onResponse', response.data);
};

const errorSaveImage = (response) => {
  errorMsg.value = [];
  if (response?.errors?.photos) {
    errorMsg.value.push(response.errors.photos);
    $toast(response.errors.photos, { type: "error" });
  } else {
    errorMsg.value.push("An error occurred during upload.");
    $toast(errorMsg.value[0], { type: "error" });
  }
};

const finallySaveImage = () => {
  isUploading.value = false;
};

const fileSelected = (ev) => {
  image.value = ev.target.files[0];
};

const validate = () => {
  const allowedSize = props.maxImgSize ?? defaultMaxImageSize;

  if (image.value.size > allowedSize) {
    const msg = "File is too large, allowed size is " + (allowedSize / 1024) + "KB";
    errorMsg.value.push(msg);
    $toast(msg, { type: "error" });
    return false;
  }

  return true;
};
</script>

<template>
  <div :style="'background-image: url('+ imgSrc +');'"></div>

  <div style="width: 100%; max-width: 400px;">
    <label style="display: flex; align-items: center; width: 100%; position: relative;background-color: #ccc;">
      <input
        @change="fileSelected"
        style="position: absolute; top: 0; left: 0; width: 100%; max-width: 400px; height: 100%; opacity: 0; cursor: pointer;"
        type="file"
        name="photo"
        id="photo"
      >
      <ImageComp
        style="display: block; width: 100%; height: 300px; background-position: center; background-size: cover;"
        class="block w-full shadow-solid bg-center bg-cover"
        :img="imgSrc"
      />
    </label>

    <div v-if="!hideUploadButton" style="display: flex; align-items: center;">
      <button
        @click.prevent="sendFile"
        :class="{ 'is-loading': isUploading }"
        class="button is-fullwidth"
      >
        Upload
      </button>
    </div>

    <div style="margin-top: .25rem;">
      <p v-if="errorMsg[0]" style="font-size: .875rem; color: rgb(239, 68, 68);">
        {{ errorMsg[0] }}
      </p>
      <p v-if="successMsg" style="font-size: .875rem; color: rgb(16, 185, 129);">
        {{ successMsg }}
      </p>
    </div>
  </div>
</template>
