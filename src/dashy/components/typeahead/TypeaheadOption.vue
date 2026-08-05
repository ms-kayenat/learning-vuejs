<script setup>
import { inject } from 'vue';

import {
	typeaheadOptionValueSelectedKey,
	typeaheadOptionModelValueSelectedKey
} from "./ProviderKeys.js"

const typeaheadOptionValueSelected = inject(typeaheadOptionValueSelectedKey);
const typeaheadOptionModelValueSelected = inject(typeaheadOptionModelValueSelectedKey);

const props = defineProps({
	selected: {
		type: Boolean,
		default: false,
	},
	value: {
		type: undefined, // Allow any type
		default: "",
	},
	modelValue: {
		type: undefined, // Allow any type
		default: "",
	}
});

const emits = defineEmits(["optionSelected"]);

const optionSelected = (value, modelValue) => {
	typeaheadOptionValueSelected(value);
	typeaheadOptionModelValueSelected(modelValue);
}
</script>
<template>
	<li @click="optionSelected(value, modelValue)" class="typeahead-suggestion-item" :class="{'is-active': selected}">
		<slot></slot>
	</li>
</template>