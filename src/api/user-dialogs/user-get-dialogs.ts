import { collection, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { eventChannel } from 'redux-saga';
import { UserMessageType } from '../../types/user-message-type';

const queryDialog = (uid: string) => {
  return query(collection(firestoreDb, 'questions', uid, 'messages'), orderBy('timestamp', 'asc'));
};

export const getCurrentMessages = (uid: string) => {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(queryDialog(uid), (messages) => {
      const currentMessages: UserMessageType[] = [];
      messages.forEach((message) => {
        currentMessages.push({
          content: message.data().content,
          timestamp: message.data().timestamp,
          writtenBy: message.data().writtenBy,
        });
      });
      setDoc(doc(firestoreDb, 'questions', uid), { unread: 0 }, { merge: true });
      emitter(currentMessages);
    });

    return () => {
      unsubscribe();
    };
  });
};
