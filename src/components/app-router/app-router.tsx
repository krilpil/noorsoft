import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/router';

const AppRouter = () => {
  const isAuth = useAppSelector((state) => state.root.user.isAuth);

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
