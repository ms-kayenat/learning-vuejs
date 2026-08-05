import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import { useAuthStore } from '@/stores/AuthStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach(async (to, from) => {
//   const auth = useAuthStore();

//   const isLoggedIn = auth.isAuthenticated();
//   const user = auth.getAdmin();
//   const userRole = user ? user.role : null;

//   if (to.meta.requiresAuth && !isLoggedIn) {
//     window.location = "/login"
//   }

//   if ((to.name === 'auth.login' || to.name === 'auth.user.login') && isLoggedIn) {
//     return { name: 'dashboard' };
//   }

//   if (to.meta.roles && to.meta.roles.length > 0) {
//     if (!userRole || !to.meta.roles.includes(userRole)) {
//       return { name: 'auth.login' };
//     }
//   }

//   return true;
// });

export default router;