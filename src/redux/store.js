import { configureStore } from '@reduxjs/toolkit';
import { logsApi } from './logsApi';


export const store = configureStore({
  reducer: {
    [logsApi.reducerPath]: logsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logsApi.middleware),
});