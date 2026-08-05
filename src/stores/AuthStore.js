import { defineStore } from 'pinia';
import { axios } from '@/util/axios'; // Correct import for named export

export const useAuthStore = defineStore("auth", {
	state: () => ({
		admin: null,
		_dashboard_agent: null,
		authToken: "",
		isAdminAuthenticated: false,

	}),

	getters: {
		dashboard_agent() { return this._dashboard_agent },
		admin2() { return this.getAdmin(); },
	},

	actions: {

		getAdmin() {
			if (!this.admin) {
				const authData = localStorage.getItem("auth_token");
				if (authData) {
					const parsedData = JSON.parse(authData);
					if (parsedData && parsedData.is_authenticated) {
						this.admin = parsedData.admin;
						this.isAdminAuthenticated = true;
					}
				}
			}
			return this.admin;
		},

		isAuthenticated() {
			if (this.isAdminAuthenticated) {
				return true;
			}

			const authData = localStorage.getItem("auth_token");
			if (!authData) {
				return false;
			}

			const t = JSON.parse(authData);
			if (!t || !t.is_authenticated) {
				return false;
			}

			this.isAdminAuthenticated = t.is_authenticated;
			return true;
		},

		adminLogin(username, password) {
			const url = `/api/v1/auth/admin/login`;
			const data = {
				email: username,
				password: password,
			};

			return new Promise((resolve, reject) => {
				axios.post(url, data).then((res) => {
					this.admin = res.data.admin;
					this.isAdminAuthenticated = true;
					this.saveAuthState();
					resolve(this.admin);
				}).catch((error) => {
					this.isAdminAuthenticated = false;
					reject(error);
				});
			});
		},

		adminLogout() {
			// @NOTE: Don't call the logout API once user is already
			// logged-out. This will prevent the current issue with the login
			// and CSRF token invalid error.
			// Currently what happen is, the app genrates new csrf-token on login page
			// but due to multiple logout call the newly generated CSRF token gets invalidated.
			// So to solve this login issue we need not call the logout API again.
			if (! localStorage.getItem("auth_token")) {
				return Promise.reject();
			}
            localStorage.clear();
			this.isAdminAuthenticated = false;
			const url = `/api/v1/auth/admin/logout`;
			return new Promise((resolve, reject) => {
				axios.post(url).then(() => {
					resolve();
				}).catch((error) => {
					reject(error);
				});
			});
		},

		userLogout() {
			// @NOTE: Don't call the logout API once user is already
			// logged-out. This will prevent the current issue with the login
			// and CSRF token invalid error.
			// Currently what happen is, the app genrates new csrf-token on login page
			// but due to multiple logout call the newly generated CSRF token gets invalidated.
			// So to solve this login issue we need not call the logout API again.
			if (! localStorage.getItem("auth_token")) {
				return Promise.reject();
			}
            localStorage.clear();
			this.isAdminAuthenticated = false;
			const url = `/api/v1/auth/user/logout`;
			return new Promise((resolve, reject) => {
				axios.post(url).then(() => {
					resolve();
				}).catch((error) => {
					reject(error);
				});
			});
		},

		saveAuthState() {
			const t = {
				is_authenticated: true,
				admin: this.admin,
				created_at: Date.now(),
			};

			localStorage.setItem("auth_token", JSON.stringify(t));
		},

		isAdmin() {
			const admin = this.getAdmin();
			if (admin && admin.role === 1) return true;

			return false;
		},

		isUser() {
			const admin = this.getAdmin();
			if (admin.role === 2) return true;

			return false;
		},

		setSchool(data) {
	        this._dashboard_agent = data;
		},

		setAdminProfile(data) {
		    if (this.admin && this.admin.id === data.id) {
		        this.admin = data;
		        this.saveAuthState();
		    }
		},

		updateAdminProfile(adminId, admin) {
			return new Promise((resolve, reject) => {
				const url = `/api/v1/admins/update-profile`;
				axios.patch(url, admin).then((res) => {
					this.admin = res.data.data;
			        this.saveAuthState();
					resolve(res.data);
				}).catch((error) => {
					reject(error);
				}).finally(() => {
					//
				});
			});
		},
	},
});
