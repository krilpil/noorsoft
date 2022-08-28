import React, { useEffect } from 'react';
import { DialogBlock, Layout } from './styled-components';
import Sidebar from '../../components/sidebar/sidebar';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setCurrentDialog, setDialogs } from '../../redux/slices/user-dialogs-slice';
import ChatInfo from '../../components/chat/chat-info/chat-info';
import { getCurrentDialog } from '../../helpers/get-current-dialog';
import { onValue, ref } from 'firebase/database';
import { firebaseDb } from '../../config/firebase';
import { getUserDialogs } from '../../api/user-dialogs/user-get-dialogs';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.main.isLoading);
  const currentUid = useAppSelector((state) => state.userAuth.uid);
  const openDialogUid = useAppSelector((state) => state.userDialogs.currentDialog.uid);

  useEffect(() => {
    onValue(ref(firebaseDb, `operators/${currentUid}/questions`), (firebaseMessages) => {
      if (firebaseMessages.exists()) {
        const dialogs = getUserDialogs(firebaseMessages.val());
        const currentDialog = getCurrentDialog({ dialogs, openDialogUid });
        dispatch(setDialogs(dialogs));
        dispatch(setCurrentDialog(currentDialog));
      }
    });
  }, []);

  if (isLoading) {
    return <p>Загрузка</p>;
  }

  // TODO: Create api for status and operatorId
  return (
    <Layout>
      <Sidebar />
      <DialogBlock>
        <ChatInfo />
        <ChatDialog openDialogUid={openDialogUid} />
        <ChatInput currentUid={currentUid} />
      </DialogBlock>
    </Layout>
  );
};

export default React.memo(HomePage);
