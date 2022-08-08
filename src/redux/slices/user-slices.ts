import { UserData, UserFormData } from '../../types/user-type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  isLoading: boolean;
  error: string;
  user: UserData;
};

const initialState: UserState = {
  isLoading: false,
  error: '',
  user: {
    isAuth: false,
    email: '',
    token: '',
    uid: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // USER LOGIN
    userLogin: (state, action: PayloadAction<UserFormData>) => {
      state.isLoading = true;
    },
    userLoginSuccess: (state, action: PayloadAction<UserData>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    userLoginFailure: (state, action: PayloadAction<UserData>) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    // CHECK USER AUTH
    userCheckAuth: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    userCheckAuthSuccess: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.user.isAuth = action.payload;
    },
    userCheckAuthFailure: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.user.isAuth = action.payload;
      state.user.token = '';
      state.user.email = '';
      state.user.uid = '';
    },
    // USER SIGNUP
    userSignup: (state, action: PayloadAction<UserFormData>) => {
      state.isLoading = true;
    },
    userSignupSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    userSignupFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // USER FORGOT PASSWORD
    userForgotPassword: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    userForgotPasswordSuccess: (state) => {
      state.isLoading = false;
    },
    userForgotPasswordFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // USER RESET PASSWORD
    userResetPassword: (state, action: PayloadAction<{ password: string; code: string }>) => {
      state.isLoading = true;
    },
    userResetPasswordSuccess: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    userResetPasswordFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // USER LOGOUT
    userLogout: (state) => {
      state.isLoading = true;
    },
  },
});

export const {
  userCheckAuth,
  userCheckAuthSuccess,
  userCheckAuthFailure,
  userLogin,
  userLoginSuccess,
  userLoginFailure,
  userSignup,
  userSignupSuccess,
  userSignupFailure,
  userForgotPassword,
  userForgotPasswordSuccess,
  userForgotPasswordFailure,
  userResetPassword,
  userResetPasswordSuccess,
  userResetPasswordFailure,
  userLogout,
} = userSlice.actions;
export default userSlice.reducer;
