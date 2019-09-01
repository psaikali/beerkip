import axios from "axios";

import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
	START_LOADING,
	STOP_LOADING,
} from "./actionTypes";

/**
 * Something is currently loading in the App (login, syncing data)
 */
export const startLoading = () => {
	return {
		type: START_LOADING,
	};
};

/**
 * We don't have any more loading
 */
export const stopLoading = () => {
	return {
		type: STOP_LOADING,
	};
};

/**
 * Try to login: launch the AJAX request and analyze the response
 * @param {string} login
 * @param {string} password
 */
export const login = (email, password) => {
	return (dispatch, getState) => {
		dispatch(startLoading());

		axios
			.post(
				"http://192.168.1.68:3000/wp-json/jwt-auth/v1/token",
				{
					username: email,
					password: password,
				},
				{
					timeout: 10000,
				}
			)
			.then(response => {
				dispatch(stopLoading());

				if (response.status === 200) {
					console.log(response.data);

					dispatch(
						loginSuccess({
							token: response.data.token,
							//login: response.data.user_login,
							email: response.data.user_email,
							name: response.data.user_display_name,
						})
					);
				} else {
					dispatch(loginError("Something went wrong."));
				}
			})
			.catch(error => {
				dispatch(stopLoading());

				if (
					error.response &&
					error.response.status &&
					error.response.status == 403
				) {
					dispatch(
						loginError(
							"This e-mail/password combination is incorrect."
						)
					);
				} else {
					dispatch(loginError("Something went wrong."));
				}
			});
	};
};

/**
 * When login is successful, save user data/token
 * @param {object} data The user data coming from WP
 */
export const loginSuccess = data => {
	return {
		type: LOGIN_SUCCESS,
		data,
	};
};

/**
 * When login failed
 */
export const loginError = message => {
	return {
		type: LOGIN_ERROR,
		message,
	};
};

/**
 * Logging out
 */
export const logout = () => {
	return {
		type: LOGOUT,
	};
};
