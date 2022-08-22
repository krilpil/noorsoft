import { onValue, ref } from 'firebase/database';
import { UserDialogType, UserMessageType } from '../../types/user-message-type';
import { firebaseDb } from '../../config/firebase';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { setDialogs } from '../../redux/slices/user-dialogs-slice';
import { useEffect } from 'react';

interface IUserDialogFetch {
  [questionerUid: string]: {
    name: string;
    surname: string;
    avatar: string;
    messages: {
      [message: string]: UserMessageType;
    };
  };
}

export const useSetUserDialogs = (currentUid: string): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onValue(ref(firebaseDb, `operators/${currentUid}/questions`), (firebaseMessages) => {
      const fetchUserDialogs: IUserDialogFetch = firebaseMessages.val();
      const dialogs: UserDialogType[] = [];

      Object.entries(fetchUserDialogs).forEach((dialog) => {
        dialogs.push({
          uid: dialog[0],
          name: dialog[1].name,
          surname: dialog[1].surname,
          avatar: dialog[1].avatar,
          messages: Object.values(dialog[1].messages),
        });
      });

      dispatch(setDialogs(dialogs));
    });
  }, [currentUid]);
};
