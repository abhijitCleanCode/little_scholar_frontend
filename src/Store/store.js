import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userDataReducer from "./slice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userDataReducer);

export const store = configureStore({
  reducer: {
    userData: persistedReducer,

    middleware: [],
  },
});

const persistor = persistStore(store);

export default store;

export { persistor };
