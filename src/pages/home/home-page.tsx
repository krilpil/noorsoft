import React, { useEffect } from 'react';
import { Layout, DialogBlock } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { userCheckAuth } from '../../redux/slices/user-slices';
import { useUserGetMessage } from '../../api/user-dialogs/user-get-message';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const currentToken = useAppSelector((state) => state.root.user.token);
  const uId = useAppSelector((state) => state.root.user.uid);
  const isLoading = useAppSelector((state) => state.root.isLoading);
  const userMessages = useUserGetMessage(uId);

  // TODO: Create api for status and operatorId
  useEffect(() => {
    dispatch(userCheckAuth(currentToken));
  }, [currentToken, dispatch]);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <Layout>
      <Sidebar />
      <DialogBlock>
        <ChatDialog messages={userMessages} />
        <ChatInput />
      </DialogBlock>
    </Layout>
  );
};

export default React.memo(HomePage);
