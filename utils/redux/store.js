import { createStore, applyMiddleware } from "redux";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import indexReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, indexReducer);
const enhancer = composeWithDevTools(applyMiddleware(rpm));

const store = createStore(persistedReducer, enhancer);
const persistore = persistStore(store);

export { store, persistore };
