import 'isomorphic-fetch';

const AUTH_TOKEN_KEY = 'authtoken';
const U_ID = 'user';
let authToken = '';

function setAuthToken(token, userid) {
	authToken = `Bearer ${token}`;
	let user = userid;
	if (localStorage) {
		localStorage.setItem(AUTH_TOKEN_KEY, authToken);
		localStorage.setItem(U_ID, user);
		console.log('Logged in: ', authToken);
	}
}

function clearAuthToken() {
	authToken = '';
	if (localStorage) {
		localStorage.removeItem(AUTH_TOKEN_KEY);
		localStorage.removeItem(U_ID);
	}
}

function populateAuthToken() {
	if (localStorage) {
		let token = localStorage.getItem(AUTH_TOKEN_KEY);
		if (token && token !== null) {
			authToken = token;
			console.log('Still logged in: ', authToken);
		}
	}
}

function makeFetch(url, info) {
	return fetch(url, info);
}

function json(url, method = 'GET', payload = {}) {
	let data = {
		method,
		body: JSON.stringify(payload),
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: authToken,
		}),
	};

	if (method === 'GET') {
		delete data.body;
	}

	return makeFetch(url, data).then(response => {
		if (response.ok) {
			let contentType = response.headers.get('Content-Type');

			if (contentType.indexOf('application/json') > -1) {
				return response.json();
			}

			return response.statusText;
		}

		throw response;
	});
}

function get(url) {
	return json(url);
}

function post(url, payload) {
	return json(url, 'POST', payload);
}

function put(url, payload) {
	return json(url, 'PUT', payload);
}

function destroy(url, payload) {
	return json(url, 'DELETE', payload);
}

export { setAuthToken, populateAuthToken, clearAuthToken, get, post, put, destroy, makeFetch };
