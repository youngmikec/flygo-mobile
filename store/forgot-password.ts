import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

export type ForgotPasswordUserDetail = {
  userId?: string;
  userEmail?: string;
  resetCode?: string;
  newPasswrod?: string;
}

type ForgotPasswordState = {
  passResetUserDetails: ForgotPasswordUserDetail | null
}

const initialState: ForgotPasswordState = {
  passResetUserDetails: null
}

export const forgotPasswordSlice = createSlice({
  name: 'forgotPasswordState',
  initialState,
  reducers: {
    SET_PASS_RESET_USER_DETAILS: (state, action: PayloadAction<ForgotPasswordUserDetail>) => {
      state.passResetUserDetails = action.payload
    }
  }
});

export const { SET_PASS_RESET_USER_DETAILS } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;

