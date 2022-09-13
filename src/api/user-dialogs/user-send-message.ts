import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { UserSendMessageType } from '../../types/user-message-type';

type userSendMessageType = UserSendMessageType & {
  questionId: string;
};

export const userSendMessage = ({ writtenBy, content, questionId }: userSendMessageType) => {
  try {
    if (questionId.length && content[0] !== ' ') {
      addDoc(collection(firestoreDb, 'questions', questionId, 'messages'), {
        content: content,
        timestamp: Timestamp.now(),
        writtenBy: writtenBy,
      });

      setDoc(doc(firestoreDb, 'questions', questionId), { lastMessage: content }, { merge: true });
    } else {
      throw new Error('You cannot enter a message outside of an open dialog');
    }
  } catch (e) {
    console.log(e);
  }
};
