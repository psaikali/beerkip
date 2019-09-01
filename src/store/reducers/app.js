import {
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
	START_LOADING,
	STOP_LOADING,
} from "../actions/actionTypes";

const initialState = {
	ui: {
		loading: false,
		messages: {
			login: null,
		},
	},
	user: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_LOADING: {
			return {
				...state,
				ui: {
					...state.ui,
					loading: true,
				},
			};
		}

		case STOP_LOADING: {
			return {
				...state,
				ui: {
					...state.ui,
					loading: false,
				},
			};
		}

		case LOGIN_SUCCESS: {
			return {
				...state,
				user: {
					...action.data,
				},
			};
		}

		case LOGIN_ERROR: {
			return {
				...state,
				ui: {
					...state.ui,
					messages: {
						...state.ui.messages,
						login: action.message,
					},
				},
			};
		}

		case LOGOUT: {
			return {
				...state,
				user: { ...initialState.user },
			};
		}

		default: {
			return state;
		}
	}
};

export default reducer;
