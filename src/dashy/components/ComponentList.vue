<template>
	<ul>
		<li v-for="(c, index) in components" :key="index">
			<router-link :to="c.link">{{ c.name }}</router-link>
		</li>
	</ul>
</template>

<script>
import sourceData from "../data.json";

export default {
	name: "ComponentList",
	data() {
		return {
			components: sourceData.components,
		}
	}
}
</script>