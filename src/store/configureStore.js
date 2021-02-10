import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, compose(applyMiddleware(thunk))); // Applying Root Reducer and Middlewares to the store

let persistor = persistStore(store); // Peristor for Local Storage

export { store, persistor };
