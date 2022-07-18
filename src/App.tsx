import React, { FC, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import GlobalStyles from './global-styles';
import LoginPage from './pages/login/login-page';
import SignupPage from './pages/signup/signup-page';
import HomePage from './pages/home/home-page';
import ResetPasswordPage from './pages/reset-password/reset-password-page';
import ForgotPasswordPage from './pages/forgot-password/forgot-password-page';

const App: FC = (): JSX.Element => {
  return (
    <Fragment>
      <GlobalStyles />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={'/signup'} element={<SignupPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/forgot-password'} element={<ForgotPasswordPage />} />
        <Route path={'/reset-password'} element={<ResetPasswordPage />} />
        <Route path={'*'} element={<p>PAGE NOT FOUND</p>} />
      </Routes>
    </Fragment>
  );
};

export default App;
