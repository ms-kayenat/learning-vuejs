<template>
	<MainLayout :menu-items="filteredMenuItems">
		<router-view></router-view>
	</MainLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import MainLayout from '@/layout/MainLayout.vue';

const authStore = useAuthStore();

const menuItems = ref([
	{
		name: "Dashboard",
		link: "dashboard",
		icon: "ri-dashboard-2-line",
		roles: [1, 2],
	},
	{
		name: "Campaigns",
		link: "campaign.index",
		icon: "ri-megaphone-line",
		roles: [1, 2],
	},
	{
		name: "Users",
		link: "user.index",
		icon: "ri-user-3-line",
		roles: [1, 2],
	},
	{
		name: "Agents",
		link: "agent.index",
		icon: "ri-user-2-line",
		roles: [1, 2],
	},
	{
		name: "Documents",
		link: "document.index",
		icon: "ri-file-ai-line",
		roles: [1, 2],
	},
	{
		name: "Profile",
		link: "profile",
		icon: "ri-user-settings-line",
		roles: [1, 2],
	},
	{
		name: "Logout",
		link: "auth.logout",
		icon: "ri-logout-circle-r-line",
		roles: [1],
	},
	{
		name: "Ijaj Akhtar",
		link: "ijaj.home.index",
		icon: "ri-user-3-line",
		roles: [1],
	},
]);

const filteredMenuItems = computed(() => {
	const isAdminAuthenticated = authStore.isAdminAuthenticated;
	const adminRole = authStore.getAdmin()?.role;

	// @TEMP @FIXME
	return menuItems.value;

	if (isAdminAuthenticated) {
		return menuItems.value.filter(item => {
			return !item.roles || item.roles.includes(adminRole);
		});
	} else {
		return menuItems.value.filter(item => {
			return item.name === "Dashboard" || item.name === "Logout";
		});
	}
});

const fetchAdmin = () => {
	authStore.getAdmin();
};

onMounted(() => {
	fetchAdmin();
});
</script>
