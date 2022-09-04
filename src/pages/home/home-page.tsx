import React from 'react';
import { DialogBlock, Layout } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import ChatInfo from '../../components/chat/chat-info/chat-info';
import { useAppSelector } from '../../hooks/redux-hooks';

const HomePage = () => {
  const isLoading = false;
  const currentDialogUid = useAppSelector((state) => state.currentDialog.userId);

  if (isLoading) {
    return <p>Загрузка</p>;
  }

  return (
    <Layout>
      <Sidebar />
      <DialogBlock>
        {currentDialogUid.length ? <ChatInfo /> : null}
        <ChatDialog />
        {currentDialogUid.length ? <ChatInput /> : null}
      </DialogBlock>
    </Layout>
  );
};

export default React.memo(HomePage);
