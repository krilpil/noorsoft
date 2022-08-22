import { UserMessageType } from '../types/user-message-type';
import { useEffect, useState } from 'react';
import { useAppSelector } from './redux-hooks';

export const useFindDialog = (openDialogUid: string): UserMessageType[] => {
  const dialogs = useAppSelector((state) => state.userDialogs.dialogs);
  const [dialogMessages, setDialogMessages] = useState<UserMessageType[]>([]);
  useEffect(() => {
    dialogs.forEach((dialog) => {
      if (dialog.uid === openDialogUid) {
        setDialogMessages(dialog.messages);
      }
    });
  }, [dialogs, openDialogUid]);
  return dialogMessages;
};
