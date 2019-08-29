import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import FilesystemStorage from "redux-persist-filesystem-storage";
import { reducer as formReducer } from "redux-form";

import beersReducer from "./reducers/beers";
// import appReducer from "./reducers/app";
// import categoriesReducer from "./reducers/categories";

const persistConfig = {
	key: "brkp",
	storage: FilesystemStorage,
	blacklist: ["form"],
};

const rootReducer = combineReducers({
	form: formReducer,
	beers: beersReducer,
	// app: appReducer,
	// categories: categoriesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
	persistedReducer,
	composeEnhancers()
	//composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
