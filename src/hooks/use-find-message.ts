import { useEffect, useState } from 'react';
import { UserDialogType } from '../types/user-message-type';
import { useAppSelector } from './redux-hooks';
import { useGetUserDialogs } from '../api/user-dialogs/user-get-dialogs';

export const useUserFindMessage = (request: string): UserDialogType[] => {
  const currentUid = useAppSelector((state) => state.userAuth.uid);
  const dialogs = useGetUserDialogs(currentUid);

  const [userFoundMessages, setUserFoundMessages] = useState<UserDialogType[]>([]);

  useEffect(() => {
    dialogs.forEach((dialog) => {
      dialog.messages.forEach((message) => {
        if (message.content === request) {
          setUserFoundMessages((userFoundMessages) => [
            ...userFoundMessages,
            {
              name: dialog.name,
              surname: dialog.surname,
              avatar: dialog.avatar,
              uid: dialog.uid,
              messages: [message],
            },
          ]);
        }
      });
    });

    return () => setUserFoundMessages([]);
  }, [request]);
  return request.length ? userFoundMessages : dialogs;
};
