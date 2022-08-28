import { useEffect, useState } from 'react';
import { UserDialogType } from '../types/user-message-type';
import { useAppSelector } from './redux-hooks';

export const useUserFindMessage = (request: string): UserDialogType[] => {
  const dialogs = useAppSelector((state) => state.userDialogs.dialogs);

  const [userFindMessages, setUserFindMessages] = useState<UserDialogType[]>([]);

  useEffect(() => {
    dialogs.forEach((dialog) => {
      dialog.messages.forEach((message) => {
        if (message.content === request) {
          setUserFindMessages((userFindMessages) => [
            ...userFindMessages,
            {
              name: dialog.name,
              surname: dialog.surname,
              status: dialog.status,
              avatar: dialog.avatar,
              uid: dialog.uid,
              messages: [message],
            },
          ]);
        }
      });
    });

    return () => setUserFindMessages([]);
  }, [request]);

  return userFindMessages;
};
