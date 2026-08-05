import axios from 'axios';

class AxiosRequest {
	static post(url, data, callbacks, options = {}) {
		axios.post(url, data, options)
		.then(function(response) {
			var res = response.data;
			if (res.status == "error") {
				console.log(res.errors);
				callbacks.error(res);
				return;
			}

			callbacks.success(res);

			// Toast message
			console.log("AxiosRequest post: success");
		}).catch(function(error) {
			console.log(error);
			if ("except" in callbacks) {
				callbacks.except(error);
			}
		}).finally(function() {
			if ("finally" in callbacks) {
				callbacks.finally();
			}
		});
	}

	static get(url, callbacks) {
		axios.get(url)
		.then(function(response) {
			var res = response.data;
			if (res.status == "error") {
				console.log(res.errors);
				callbacks.error(res);
				return;
			}

			callbacks.success(res);

			// Toast message
			console.log("AxiosRequest get: success");
		}).catch(function(error) {
			console.log(error);
			if ("except" in callbacks) {
				callbacks.except(error);
			}
		}).finally(function() {
			if ("finally" in callbacks) {
				callbacks.finally();
			}
		});
	}
}

export { AxiosRequest };