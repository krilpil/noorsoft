import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/router';
import { userCheckAuth } from '../../redux/slices/user-authorization-slice';

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const currentToken = useAppSelector((state) => state.userAuth.token);
  const isAuth = useAppSelector((state) => state.userAuth.isAuth);

  useEffect(() => {
    dispatch(userCheckAuth(currentToken));
  }, [currentToken]);

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
