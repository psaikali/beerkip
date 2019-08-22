import { ADD_BEER, EDIT_BEER, DELETE_BEER } from "./actionTypes";

/**
 * Add a new beer
 * @param {object} data The beer data
 */
export const addBeer = data => {
	return {
		type: ADD_BEER,
		data,
	};
};

/**
 * Edit a specific beer
 * @param {string} uid The beer unique ID
 * @param {object} data The new beer data
 */
export const editBeer = (uid, data) => {
	return {
		type: EDIT_BEER,
		uid,
		data,
	};
};

/**
 * Delete a specific beer
 * @param {string} uid The beer unique ID
 */
export const deleteBeer = uid => {
	return {
		type: DELETE_BEER,
		uid,
	};
};
