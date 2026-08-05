<template>
	<div>
		<div class="widget has-shadow" style="height: 100%;">
			<div class="inline-group" style="width:100%; justify-content: space-between;">
				<h2 class="widget-title">{{ widgetTitle }}</h2>
				<slot name="metricfilters"></slot>
			</div>
			<div class="widget-body">
				<p style="align-items: center;">
					<slot></slot>
				</p>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: "MetricCard",
		props: ['widgetTitle'],
	}
</script>