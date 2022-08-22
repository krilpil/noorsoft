import React, { useEffect } from 'react';
import { DialogBlock, Layout } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useGetUserDialogs } from '../../api/user-dialogs/user-get-dialogs';
import { setDialogs } from '../../redux/slices/user-dialogs-slice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.main.isLoading);
  const currentUid = useAppSelector((state) => state.userAuth.uid);
  const dialogs = useGetUserDialogs(currentUid);

  useEffect(() => {
    dispatch(setDialogs(dialogs));
  }, [dialogs]);

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
