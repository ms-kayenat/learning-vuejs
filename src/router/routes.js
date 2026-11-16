import MainLayoutView from '@/layout/MainLayoutView.vue'
import HomePage from '@/pages/home/HomePage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import LogoutPage from '@/pages/auth/LogoutPage.vue'

import DashboardPage from '@/pages/dashboard/DashboardPage.vue'
import ProfileIndexPage from '@/pages/profiles/ProfileIndexPage.vue'

//user
import UserIndexPage from '@/pages/user/UserIndexPage.vue'
import UserShowPage from '@/pages/user/UserShowPage.vue'
import UserCreatePage from '@/pages/user/UserCreatePage.vue'
import UserEditPage from '@/pages/user/UserEditPage.vue'

//agent
import AgentIndexPage from '@/pages/agent/AgentIndexPage.vue'
import AgentShowPage from '@/pages/agent/AgentShowPage.vue'
import AgentCreatePage from '@/pages/agent/AgentCreatePage.vue'
import AgentEditPage from '@/pages/agent/AgentEditPage.vue'

//campaign
import CampaignIndexPage from '@/pages/campaign/CampaignIndexPage.vue'
import CampaignShowPage from '@/pages/campaign/CampaignShowPage.vue'
import CampaignCreatePage from '@/pages/campaign/CampaignCreatePage.vue'
import CampaignEditPage from '@/pages/campaign/CampaignEditPage.vue'

//document
import DocumentIndexPage from '@/pages/document/DocumentIndexPage.vue'
import DocumentShowPage from '@/pages/document/DocumentShowPage.vue'
import DocumentCreatePage from '@/pages/document/DocumentCreatePage.vue'
import DocumentEditPage from '@/pages/document/DocumentEditPage.vue'

import IjajHomePage from '@/ijaj/pages/IjajHomePage.vue'



// Import other pages...

const routes = [
	{ path: '/', redirect: { name: 'home' } },
	{ path: '/app', name: 'home', component: HomePage },
	{ path: '/app/login', name: 'auth.login', component: LoginPage, meta: { requiresAuth: false } },
	{ path: '/app/logout', name: 'auth.logout', component: LogoutPage, meta: { requiresAuth: false } },
	{
		path: '/app',
		component: MainLayoutView,
		meta: { requiresAuth: false },
		children: [
			{ path: 'dashboard', name: 'dashboard', component: DashboardPage, meta: { requiresAuth: false, roles: [1, 2] } },
			{ path: 'profile', name: 'profile', component: ProfileIndexPage, meta: { requiresAuth: false, roles: [1, 2] } },

			// user
			{ path: 'users', name: 'user.index', component: UserIndexPage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'users/create', name: 'user.create', component: UserCreatePage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'users/:id/show', name: 'user.show', component: UserShowPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'users/:id/edit', name: 'user.edit', component: UserEditPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },

			//agent
			{ path: 'agents', name: 'agent.index', component: AgentIndexPage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'agents/:id/show', name: 'agent.show', component: AgentShowPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'agents/create', name: 'agent.create', component: AgentCreatePage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'agents/:id/edit', name: 'agent.edit', component: AgentEditPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },

			//campaign
			{ path: 'campaigns', name: 'campaign.index', component: CampaignIndexPage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'campaigns/:id/show', name: 'campaign.show', component: CampaignShowPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'campaigns/create', name: 'campaign.create', component: CampaignCreatePage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'campaigns/:id/edit', name: 'campaign.edit', component: CampaignEditPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },

			//document
			{ path: 'documents', name: 'document.index', component: DocumentIndexPage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'documents/:id/show', name: 'document.show', component: DocumentShowPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'documents/create', name: 'document.create', component: DocumentCreatePage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },
			{ path: 'documents/:id/edit', name: 'document.edit', component: DocumentEditPage, props: true, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },


			// IJAJ
			{ path: 'ijaj-home-page', name: 'ijaj.home.index', component: IjajHomePage, meta: { requiresAuth: true, isAdmin: true, roles: [1, 2] } },



		],

	},

	/////////////////////////////////////////////////////////
	// Error pages
];

export default routes;