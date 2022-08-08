import React from 'react';
import HomePage from '../pages/home/home-page';
import LoginPage from '../pages/login/login-page';
import ForgotPasswordPage from '../pages/forgot-password/forgot-password-page';
import ResetPasswordPage from '../pages/reset-password/reset-password-page';
import SignupPage from '../pages/signup/signup-page';
import { Navigate } from 'react-router-dom';

type RouterType = {
  path: string;
  element: JSX.Element;
};

export enum RouterLinks {
  MESSAGES = '/',
  LOGIN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  SIGNUP = '/signup',
  NOTFOUND = '*',
}

export const publicRoutes: RouterType[] = [
  { path: RouterLinks.LOGIN, element: <LoginPage /> },
  { path: RouterLinks.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
  { path: RouterLinks.RESET_PASSWORD, element: <ResetPasswordPage /> },
  { path: RouterLinks.SIGNUP, element: <SignupPage /> },
  { path: RouterLinks.NOTFOUND, element: <Navigate to={RouterLinks.LOGIN} /> },
];

export const privateRoutes: RouterType[] = [
  { path: RouterLinks.MESSAGES, element: <HomePage /> },
  { path: RouterLinks.NOTFOUND, element: <Navigate to={RouterLinks.MESSAGES} /> },
];
