import { eventChannel } from 'redux-saga';
import { collection, getDocs, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { StatusDialogType, UserSideMessageType } from '../../types/user-message-type';

const queryQuestions = (status: StatusDialogType) => {
  return query(collection(firestoreDb, 'questions'), where('status', '==', status));
};

const queryLastMessages = (dialogId: string) => {
  return query(
    collection(firestoreDb, 'questions', dialogId, 'messages'),
    orderBy('timestamp', 'desc'),
    limit(1)
  );
};

export const getSideDialogs = (status: StatusDialogType) => {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(queryQuestions(status), (snapshot) => {
      const sideDialogs: UserSideMessageType[] = [];

      if (snapshot.docs.length === 0) {
        emitter(sideDialogs);
      }

      snapshot.docs.forEach((dialog) => {
        getDocs(queryLastMessages(dialog.id)).then((messages) => {
          sideDialogs.push({
            status: status,
            userId: dialog.id,
            lastMessage: messages.docs[0].data().content,
            unread: dialog.data().unread,
          });

          if (sideDialogs.length === snapshot.docs.length) {
            emitter(sideDialogs);
          }
        });
      });
    });
    // To unsubscribe, call emitter(END)
    return () => {
      unsubscribe();
    };
  });
};
