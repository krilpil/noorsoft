import { addDoc, collection, doc, runTransaction, Timestamp } from 'firebase/firestore';
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

      // TODO: useless transaction - updates messages; Delete when the mobile app appears
      runTransaction(firestoreDb, async (transaction) => {
        const userDocRef = doc(firestoreDb, 'questions', questionId);

        const userDoc = await transaction.get(userDocRef);
        if (!userDoc.exists()) {
          throw new Error('Document questions does not exist!');
        }

        const unreadCount = userDoc.data().unread;
        transaction.update(userDocRef, { unread: unreadCount + 1 });
        return unreadCount;
      });
    } else {
      throw new Error('You cannot enter a message outside of an open dialog');
    }
  } catch (e) {
    console.log(e);
  }
};
