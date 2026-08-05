<script setup>
import { ref, watch } from 'vue';
import Pagination from '@/dashy/components/Pagination.vue';
import Filter from '@/data/Filter.json'
import Button from '@/dashy/components/Button.vue';
import DeleteButton from '@/components/DeleteButton.vue';
import Select from '@/dashy/components/Select.vue'
import CopyToClipboard from '@/components/CopyToClipboard.vue';

const props = defineProps({
	documents: {
		type: Array,
		required: true,
	},
	page: {
		type: Number,
		default: 1,
	},
	deletingId: {
	  type: Number,
	  required: false,
	},
});

const emit = defineEmits(["onQueryParamsChange, onDeleteDocument"]);
const agentStatus = ref(Filter.agentStatus);

const processing = ref(false);
const isFilterOpen = ref(false);
const itemCount = ref(10);
const q = ref ("");
const queryParams = ref({
	q: "",
	from_date: "",
	to_date: "",
	status: "",
});

const emitQueryParamsChange = () => {
  emit('onQueryParamsChange', queryParams.value);
  isFilterOpen.value = false;
};

const clearFilter = () => {
	q.value = ""
  Object.keys(queryParams.value).forEach(key => {
    queryParams.value[key] = "";
  });
  isFilterOpen.value = false;
};

const deleteAdvertisement = (document) => {
		emit('onDeleteDocument', document);
	};

watch(q, (query) => {
	queryParams.value.q = query;
	emitQueryParamsChange();
});

</script>

<template>
	<div class="table">
		<div class="table-header">
			<div class="table-header-left">
				<div style="max-width: 300px">
					<input v-model="q" type="text" placeholder="Search.." name="q" class="input">
				</div>
			</div>
			<div class="table-header-right">
				<div class="inline-group">
					<div style="max-width: 300px">
						<div class="droppable">
							<Button @click="isFilterOpen = !isFilterOpen" class="">
								<div style="display: flex;">
									<span style="display: flex; align-items: center;"><i class="ri-filter-line"></i></span>
									<span>Filter</span>
								</div>
							</Button>
							<div class="filter is-droppable is-top-right" :class="{'is-active': isFilterOpen}">
								<form @submit.prevent="emitQueryParamsChange" action="" method="get">
									<div class="filter-wrapper">
										<header class="filter-header">
											<!--  -->
										</header>
										<div class="filter-body">
											<div class="filter-block">
												<div class="filter-columns">
													<div class="filter-column">
														<label for="from_date" class="label filter-label">From</label>
														<input v-model="queryParams.from_date" type="date" name="from_date" id="from_date" class="input">
													</div>
													<div class="filter-column">
														<label for="to_date" class="label filter-label">To</label>
														<input v-model="queryParams.to_date" type="date" name="to_date" id="to_date" class="input">
													</div>
												</div>
											</div>
											<div class="filter-block">
												<label for="status" class="label filter-label">Status</label>
												<div class="select">
													<Select v-model="queryParams.status" placeholder="--">
														<option v-for="s in agentStatus" :selected="s.status == queryParams.status" :value="s.status">
															{{ s.name }}
														</option>
													</Select>
												</div>
											</div>
										</div>
										<footer class="filter-footer">
											<div class="inline-group">
												<Button @click="clearFilter">Clear</Button>
												<Button :loading="processing" class="is-primary">Apply</Button>
											</div>
										</footer>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="table-body">
			<div class="table-thead">
				<div class="table-row">
					<div class="table-col">ID</div>
					<div class="table-col">Name</div>
					<div class="table-col">Required?</div>
					<div class="table-col">Status</div>
					<div class="table-col">Created At</div>
					<div class="table-col" style="text-align: right;"></div>
				</div>
			</div>

			<div class="table-tbody">
				<div v-for="d in documents" :key="d.id" class="table-row">
					<div class="table-col">
						<router-link :to="{name: 'document.show', params: { id: d.id } }">
							{{ d.id }}
						</router-link>
					</div>

					<div class="table-col">{{ d.name }}</div>
					<div class="table-col">{{ d.required }}</div>

					<div class="table-col">
						<span v-if="d.status == 1" class="tag is-success">Active</span>
						<span v-if="d.status == 2" class="tag is-warning">Inactive</span>
					</div>

					<div class="table-col" :title="readableFormattedLongDateWithMeridiem(d.created_at)">
						{{ readableFormattedDate(d.created_at) }}
					</div>
					<div class="table-col" style="text-align: right;">
						<div>
							<router-link :to="{name: 'document.edit', params: {id: d.id}}">
								<i class="ri-edit-circle-line" title="Edit"></i>
							</router-link> 
							<DeleteButton :processing="deletingId == d.id" title="Delete"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="table-footer">
			<Pagination
				:page="page"
				:item-count="itemCount"
				:base-url="$route.path"
			/>
		</div>
	</div>
</template>