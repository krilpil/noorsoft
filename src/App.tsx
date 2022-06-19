import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import GlobalStyles from './global-styles';
import LoginPage from './pages/login/login-page';
import SignupPage from './pages/signup/signup-page';
import HomePage from './pages/home/home-page';
import ResetPasswordPage from './pages/reset-password/reset-password-page';

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  );
};

export default React.memo(App);
