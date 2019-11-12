import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import FilesystemStorage from "redux-persist-filesystem-storage";

import beersReducer from "./reducers/beers";

const persistConfig = {
	key: "brkp",
	storage: FilesystemStorage,
};

const rootReducer = combineReducers({
	beers: beersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
