import {
	ADD_BEER,
	EDIT_BEER,
	DELETE_BEER,
	PUSH_SUCCESS,
} from "../actions/actionTypes";

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
			return state.map(beer => {
				if (beer.uid === action.uid) {
					return {
						...beer,
						edited: true,
						deleted: true,
						deletedAt: Date.now(),
					};
				} else {
					return beer;
				}
			});
		}

		case PUSH_SUCCESS:
			if (
				action.objectsType !== "beers" ||
				!action.response.synced_data
			) {
				return state;
			} else {
				/**
				 * Take each item sent back by WordPress and assign the new "syncId" property to it.
				 */
				return state
					.map(item => {
						const syncedItemData = action.response.synced_data.find(
							syncedItem => item && syncedItem.uid === item.uid
						);

						if (syncedItemData) {
							// If user did not ask for the beer deletion, keep it in the state and set the edited: flag to false.
							if (!item.deleted) {
								return {
									...item,
									edited: false,
									syncId: syncedItemData.id,
								};
							}
						} else {
							return item;
						}
					})
					.filter(beer => beer);
			}

		default: {
			return state;
		}
	}
};

export default reducer;
