import React from 'react';
import { DialogBlock, Layout } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useSetUserDialogs } from '../../api/user-dialogs/user-get-dialogs';

const HomePage = () => {
  const isLoading = useAppSelector((state) => state.main.isLoading);
  const currentUid = useAppSelector((state) => state.userAuth.uid);
  useSetUserDialogs(currentUid);

  if (isLoading) {
    return <p>Загрузка</p>;
  }

  // TODO: Create api for status and operatorId
  return (
    <Layout>
      <Sidebar />
      <DialogBlock>
        <ChatDialog />
        <ChatInput currentUid={currentUid} />
      </DialogBlock>
    </Layout>
  );
};

export default React.memo(HomePage);
