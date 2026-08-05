<script setup>
import { ref, watch } from 'vue';
import Pagination from '@/dashy/components/Pagination.vue';
import Button from '@/dashy/components/Button.vue';
import Select from '@/dashy/components/Select.vue'
import CopyToClipboard from '@/components/CopyToClipboard.vue';
import Filter from '@/data/Filter.json'

const props = defineProps({
	campaigns: {
		type: Array,
		required: true,
	},
	page: {
		type: Number,
		default: 1,
	},
});

const emit = defineEmits(["onQueryParamsChange"]);
const campaignStatus = ref(Filter.campaignStatus);

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
														<option v-for="s in campaignStatus" :selected="s.status == queryParams.status" :value="s.status">
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
					<div class="table-col"></div>
					<div class="table-col">Title</div>
					<div class="table-col">DID</div>
					<div class="table-col">UTM Source</div>
					<div class="table-col">Remote Postable</div>
					<div class="table-col">Created At</div>
					<div class="table-col"></div>
				</div>
			</div>

			<div class="table-tbody">
				<div v-for="c in campaigns" :key="c.id" class="table-row">
					<div class="table-col">
						<router-link :to="{name: 'campaign.show', params: { id: c.id } }">
							{{ c.id }}
						</router-link>
					</div>

					<div class="table-col">
						<img :src="c.endpoint_url" style="width:50px;height:50px;border-radius:8px;">
					</div>

					<div class="table-col">
						<div>{{ truncateText(c.title) }}</div>
						<div style="font-size: 0.9em; color: #666;">{{ truncateText(c.description) }}</div>
					</div>

					<div class="table-col">{{ c.did }}</div>
					<div class="table-col">{{ c.utm_source}}</div>

					<div class="table-col">
						<span v-if="c.status == 0" class="tag is-success">Active</span>
						<span v-if="c.status == 1" class="tag is-warning">Inacive</span>
					</div>

					<div class="table-col" :title="readableFormattedLongDateWithMeridiem(c.created_at)">
						{{ readableFormattedDate(c.created_at) }}
					</div>
					<div class="table-col">
						<router-link :to="{name: 'campaign.edit', params: {id: c.id}}">
							<i class="ri-edit-circle-line" title="Edit"></i>
						</router-link>
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