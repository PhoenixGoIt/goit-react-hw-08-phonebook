import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist";
import { authReducer } from "./auth/slice";
import contactsSlice from "./contacts/contactsSlice";
import filterSlice from "./filterSlice";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ["token"],
  
} 


const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    auth: persistedReducer,
    contacts: contactsSlice,
  },
});

export const persistor = persistStore(store)