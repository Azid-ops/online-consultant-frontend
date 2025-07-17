import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import profileReducer from './profileSlice';
import documentsReducer from './documentsSlice';

const persistConfig = {
  key: 'online-consultant',
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  documents: documentsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 