<template>
	
	<section class="dashy-layout" style="background-image: url('/assets/img/dashy-cover-bg.jpg')">
		<aside class="dashy-sidebar">
			<div class="brand-logo">
				<img src="/assets/img/logo.png" alt="Appzillians">
			</div>
			<div class="dashy-navbar-wrapper">
				<div class="dashy-navbar">
					<div class="navbar-label">MENU</div>
					<ul class="dashy-navbar-menu">

						<li v-for="(item, index) in menuItems" :key="index" >
							<router-link :to="{name: item.link}" @click="activeMenuItem = index" class="dashy-navbar-menu-item" :class="{'is-active': activeMenuItem == index}">
								<span class="icon">
									<i :class="item.icon"></i>
								</span>
								<span>{{ item.name }}</span>
							</router-link>
						</li>

					</ul>
				</div>
			</div>
		</aside>
		<aside class="dashy-page-wrapper">
			<nav class="navbar">
				<div class="nav-content">
					<div class="navbar-menu">
						<!-- @TODO -->
					</div>
					<div class="navbar-profile-line">
						<button class="button">
							<div class="avatar-rounded dashy-avatar">
								<img src="/assets/img/profile-pic.jpg" alt="">
							</div>
							<span>Admin</span>
						</button>
					</div>
				</div>
			</nav>
			<main>
				<div class="page-content">
					<!-- Main dynamic content of the page goes here -->
					<slot>
						<p>Main content</p>
					</slot>
				</div>
			</main>
		</aside>
	</section>

</template>

<script>

export default {
	name: "MainLayout",
	props: {
		menuItems: {
			type: Array,
		},
	},
	data() {
		return {
			activeMenuItem: 0,
		}
	},
}
</script>
