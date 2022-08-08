import React, { FC, Fragment } from 'react';
import 'antd/dist/antd.css';
import GlobalStyles from './global-styles';
import AppRouter from './components/app-router/app-router';

const App: FC = (): JSX.Element => {
  return (
    <Fragment>
      <GlobalStyles />
      <AppRouter />
    </Fragment>
  );
};

export default App;
