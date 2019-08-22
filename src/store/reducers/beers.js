import { ADD_BEER, EDIT_BEER, DELETE_BEER } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BEER: {
			return [...state, action.data];
		}

		case EDIT_BEER: {
			return state.map(beer => {
				if (beer.uid === action.uid) {
					return {
						...beer,
						edited: true,
						editedAt: Date.now(),
						...action.data,
					};
				} else {
					return beer;
				}
			});
		}

		case DELETE_BEER: {
			return state.filter(beer => beer.uid !== action.uid);
		}

		default: {
			return state;
		}
	}
};

export default reducer;
