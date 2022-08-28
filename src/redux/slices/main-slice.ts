import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import {
  userCheckAuth,
  userCheckAuthFailure,
  userCheckAuthSuccess,
  userForgotPassword,
  userForgotPasswordFailure,
  userForgotPasswordSuccess,
  userLogin,
  userLoginFailure,
  userLoginSuccess,
  userLogout,
  userResetPassword,
  userResetPasswordFailure,
  userResetPasswordSuccess,
  userSignup,
  userSignupFailure,
  userSignupSuccess,
} from './user-authorization-slice';

type state = {
  isLoading: boolean;
  error: string;
};

const initialState: state = {
  isLoading: false,
  error: '',
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLoginSuccess, (state) => {
        state.error = '';
      })
      .addMatcher(
        isAnyOf(
          userLogin,
          userLogout,
          userCheckAuth,
          userSignup,
          userForgotPassword,
          userResetPassword
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          userLoginSuccess,
          userLoginFailure,
          userCheckAuthSuccess,
          userCheckAuthFailure,
          userSignupSuccess,
          userSignupFailure,
          userForgotPasswordSuccess,
          userForgotPasswordFailure,
          userResetPasswordSuccess,
          userResetPasswordFailure
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          userLoginFailure,
          userSignupSuccess,
          userSignupFailure,
          userForgotPasswordSuccess,
          userForgotPasswordFailure,
          userResetPasswordSuccess,
          userResetPasswordFailure
        ),
        (state, action) => {
          state.error = action.payload;
        }
      );
  },
});

export const { setError, setLoader } = mainSlice.actions;
export default mainSlice.reducer;
