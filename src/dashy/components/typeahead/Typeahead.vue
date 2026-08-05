<script setup>
import { ref, provide, defineModel } from 'vue';

import {
	typeaheadOptionValueSelectedKey,
	typeaheadOptionModelValueSelectedKey,
} from "./ProviderKeys.js"

const props = defineProps({
	name: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		default: "",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

let inputEl = null;

const modelValue = defineModel();
const searchValue = defineModel("search");

const isSuggestionsOpen = ref(false);
const emits = defineEmits(['selected', 'onInput', 'update:modelValue', 'update:search']);
const onBlurSuggestions = () => {
	setTimeout(() => {
		isSuggestionsOpen.value = false;
	}, 150);
}

const onArrowDown = () => {
	// console.log("DOWN");
}

const onArrowUp = () => {
	// console.log("UP");
}

const onEnter = () => {
	// console.log("ENTER");
}

provide(typeaheadOptionValueSelectedKey, (value) => {
	emits('update:modelValue', value);
});

provide(typeaheadOptionModelValueSelectedKey, (value) => {
	emits('selected', value);
});

</script>
<template>
	<div class="typeahead">
		<div class="typeahead-input">
			<input
				id="dashy_typeahead_input"
				v-model="searchValue"
				type="text"
				class="input"
				:placeholder="placeholder"
				:disabled="disabled"
				@focus="isSuggestionsOpen = true"
				@blur="onBlurSuggestions"
				@keyup.arrow-down="onArrowDown"
				@keyup.arrow-up="onArrowUp"
				@keyup.enter="onEnter"
			/>
		</div>
		<ul v-show="isSuggestionsOpen" class="typeahead-suggestions">
			<slot></slot>
		</ul>
	</div>
</template>