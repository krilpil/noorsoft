import React, { useEffect } from 'react';
import { Layout, DialogBlock } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { checkAuthRequest } from '../../redux/actions/form-actions';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const currentToken = useAppSelector((state) => state.root.user.token);
  const isAuth = useAppSelector((state) => state.root.user.isAuth);
  const isLoading = useAppSelector((state) => state.root.isLoading);

  useEffect(() => {
    dispatch(checkAuthRequest(currentToken));
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return isAuth ? (
    <Layout>
      <Sidebar />
      <DialogBlock>
        <ChatDialog />
        <ChatInput />
      </DialogBlock>
    </Layout>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default HomePage;
