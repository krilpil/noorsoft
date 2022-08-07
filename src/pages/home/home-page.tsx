import React, { useEffect } from 'react';
import { Layout, DialogBlock } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { userCheckAuth } from '../../redux/reducers/form-reducers';
import { useUserGetMessage } from '../../api/user-dialogs/user-get-message';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const currentToken = useAppSelector((state) => state.root.user.token);
  const uId = useAppSelector((state) => state.root.user.uid);
  const isAuth = useAppSelector((state) => state.root.user.isAuth);
  const isLoading = useAppSelector((state) => state.root.isLoading);
  const userMessages = useUserGetMessage(uId);

  // TODO: Create api for status and operatorId
  useEffect(() => {
    dispatch(userCheckAuth(currentToken));
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return isAuth ? (
    <Layout>
      <Sidebar />
      <DialogBlock>
        <ChatDialog messages={userMessages} />
        <ChatInput />
      </DialogBlock>
    </Layout>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default HomePage;
