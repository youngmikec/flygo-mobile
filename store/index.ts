import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from './app-state';
import forgotPasswordReducer from './forgot-password'

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    forgotPasswordState: forgotPasswordReducer
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
