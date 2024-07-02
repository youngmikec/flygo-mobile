import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";

interface AppState {
  theme: 'dark' | 'light';
  isAuthenticated: boolean;
  authUser: any
}

const initialState: AppState = {
  theme: 'light',
  isAuthenticated: false,
  authUser: null
}

export const AppSlice = createSlice({
  name: 'appState', 
  initialState,
  reducers: {
    SET_APP_THEME: (state, action) => {
      state.theme = action.payload
    },
    SET_IS_AUTHENTICATED: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    SET_AUTH_USER: (state, action) => {
      state.authUser = action.payload
    }
  }
});

export const { SET_APP_THEME, SET_IS_AUTHENTICATED, SET_AUTH_USER } = AppSlice.actions;
export default AppSlice.reducer;