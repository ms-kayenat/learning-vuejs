<script setup>
import { ref, defineProps, defineEmits, computed, getCurrentInstance } from 'vue';
import ImageComp from '@/components/ImageComp.vue';
import { AxiosRequest } from '@/util/axios_request.js';

const props = defineProps({
  id: [String, Number],
  postUrl: String,
  imgSrc: String,
  maxImgSize: Number,
});

const emit = defineEmits(['onImgSrcChanged']);

const image = ref(null);
const isUploading = ref(false);
const errorMsg = ref([]);
const successMsg = ref("");
const defaultMaxImageSize = 1024 * 100;

const { proxy } = getCurrentInstance();
const $toast = proxy.$toast;

const allowedImageSize = computed(() => props.maxImgSize ?? defaultMaxImageSize);

// Methods
const validate = () => {
  errorMsg.value = [];
  if (!image.value) {
    errorMsg.value.push("Please select an image.");
    return false;
  }
  if (image.value.size > allowedImageSize.value) {
    const errorMessage = `File is too large, allowed size is ${allowedImageSize.value / 1024}KB`;
    errorMsg.value.push(errorMessage);
    toast(errorMessage, { type: "error" });
    return false;
  }
  return true;
};

const sendFile = () => {
  if (image.value === null) {
    errorMsg.value.push("Please select an image.");
    return;
  }

  errorMsg.value = [];
  successMsg.value = '';
  if (!validate()) return;

  const url = props.postUrl;
  const data = new FormData();
  isUploading.value = true;
  data.append("id", props.id);
  data.append("photo", image.value);

  AxiosRequest.post(url,data,{
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
	$toast(successMsg.value, {type: "success"});

	if ("data" in response && "image_url" in response.data) {
		emit('onImgSrcChanged', response.data.image_url);
	}
};

const errorSaveImage = (response) => {
	errorMsg.value.push(response.errors.photos);
	$toast(errorMsg.value, {type: "error"});

};

const finallySaveImage = () => {
  isUploading.value = false;
};

const fileSelected = (ev) => {
  image.value = ev.target.files[0];
};


const toast = (message, options) => {
  if (typeof window !== 'undefined' && window.$toast) {
    window.$toast(message, options);
  }
};


</script>


<template>
	    <div>
			<label style="display: flex; align-items: center; width: 100%; position: relative;">
				<input
					@change="fileSelected"
					style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer;"
					type="file"
					name="photo"
					id="photo">
				<ImageComp
					style="display: block; width: 100%; height: 300px; background-position: center; background-size: cover;"
					class="block h-32 w-full shadow-solid bg-center bg-cover"
					:img="imgSrc"
					>
				</ImageComp>
			</label>
			<div style="display: flex; align-items: center;">
				<button
	                @click.prevent="sendFile"
	                :class="{'is-loading': isUploading}"
					class="button is-fullwidth">
					Upload
				</button>
			</div>
			<div style="margin-top: .25rem;">
				<p v-for="msg in errorMsg" style="font-size: .875rem; color: rgb(239, 68, 68);">{{ msg }}</p>
				<p v-if="successMsg" style="font-size: .875rem; color: rgb(16, 185, 129);">{{ successMsg }}</p>
			</div>
		</div>
</template>