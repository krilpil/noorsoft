import { push, ref } from 'firebase/database';
import { firebaseDb } from '../../config/firebase';
import { UserSendMessageType } from '../../types/user-message-type';
import { firebaseTimestamp } from '../../helpers/firebase-timestamp';

interface IQueryArg extends UserSendMessageType {
  currentUid: string;
  questionerUid: string;
}

export const userSendMessage = ({ writtenBy, content, currentUid, questionerUid }: IQueryArg) => {
  try {
    if (questionerUid.length) {
      push(ref(firebaseDb, `operators/${currentUid}/questions/${questionerUid}/messages`), {
        writtenBy,
        content,
        timestamp: firebaseTimestamp(),
      });
    } else {
      throw new Error('You cannot enter a message outside of an open dialog');
    }
  } catch (e) {
    console.log(e);
  }
};
