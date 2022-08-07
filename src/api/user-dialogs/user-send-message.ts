import { push, ref } from 'firebase/database';
import { firebaseDb } from '../../config/firebase';
import { UserSendMessageType } from '../../types/user-message-type';
import { firebaseTimestamp } from '../../helpers/firebase-timestamp';

export const userSendMessage = ({ uId, writtenBy, content }: UserSendMessageType) => {
  push(ref(firebaseDb, `users/${uId}/messages`), {
    writtenBy,
    content,
    timestamp: firebaseTimestamp(),
  });
};
