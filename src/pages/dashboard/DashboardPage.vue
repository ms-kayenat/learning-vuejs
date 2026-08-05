<script setup>
import MetricCard from '@/components/MetricCard.vue';

</script>

<template>
	<h1 class="page-title">Dashboard</h1>
	<section>
		<div style="display: grid; grid-template-columns: repeat(5, 1fr); grid-gap: 1rem; margin-top: 1rem;">
			<MetricCard widgetTitle="Sample">845</MetricCard>
		</div>
	</section>
</template>
