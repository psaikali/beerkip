import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import beersReducer from "./reducers/beers";
// import appReducer from "./reducers/app";
// import categoriesReducer from "./reducers/categories";

const rootReducer = combineReducers({
	beers: beersReducer,
	// app: appReducer,
	// categories: categoriesReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () => {
	const store = createStore(rootReducer, composeEnhancers());

	return store;
};
