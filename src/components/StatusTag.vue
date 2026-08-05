<script setup>
import { computed } from 'vue';
// Data structure
// const StatusTab = {
// 	1: {text: 'Draft', css: 'tag'};
// 	2: {text: 'Published', css: 'tag is-success'};
// 	3: {text: 'Unpublished', css: 'tag is-warning'};
// };

const props = defineProps({
	statusMap: {
		type: Object,
		required: true,
	},
	value: {
		required: true,
	},
});

const cssClass = computed(() => {
	return props.statusMap[props.value].css ?? 'tag';
});

const statusText = computed(() => {
	return props.statusMap[props.value]?.text ?? 'Unknown';
});
</script>

<template>
	<span :class="cssClass">
		{{ statusText }}
	</span>
</template>