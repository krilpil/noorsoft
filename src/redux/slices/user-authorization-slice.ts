import { UserData, UserFormData } from '../../types/user-type';
import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

type state = UserData;

const initialState: state = {
  isAuth: false,
  email: '',
  token: '',
  uid: '',
};

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    // USER LOGIN
    userLogin: (state, action: PayloadAction<UserFormData>) => state,
    userLoginSuccess: (state, action: PayloadAction<UserData>) => state,
    userLoginFailure: (state, action: PayloadAction<UserData>) => state,
    // CHECK USER AUTH
    userCheckAuth: (state, action: PayloadAction<string>) => state,
    userCheckAuthSuccess: (state, action: PayloadAction<boolean>) => state,
    userCheckAuthFailure: (state, action: PayloadAction<boolean>) => {
      state.token = '';
      state.email = '';
      state.uid = '';
    },
    // USER SIGNUP
    userSignup: (state, action: PayloadAction<UserFormData>) => state,
    userSignupSuccess: (state, action: PayloadAction<string>) => state,
    userSignupFailure: (state, action: PayloadAction<string>) => state,
    // USER FORGOT PASSWORD
    userForgotPassword: (state, action: PayloadAction<string>) => state,
    userForgotPasswordSuccess: (state, action: PayloadAction<string>) => state,
    userForgotPasswordFailure: (state, action: PayloadAction<string>) => state,
    // USER RESET PASSWORD
    userResetPassword: (state, action: PayloadAction<{ password: string; code: string }>) => state,
    userResetPasswordSuccess: (state, action: PayloadAction<string>) => state,
    userResetPasswordFailure: (state, action: PayloadAction<string>) => state,
    // USER LOGOUT
    userLogout: (state) => state,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(userLoginSuccess, userLoginFailure), (state, action) => action.payload)
      .addMatcher(isAnyOf(userCheckAuthSuccess, userCheckAuthFailure), (state, action) => {
        state.isAuth = action.payload;
      });
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
} = userAuthSlice.actions;
export default userAuthSlice.reducer;
