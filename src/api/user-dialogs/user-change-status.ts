import { set, ref } from 'firebase/database';
import { firebaseDb } from '../../config/firebase';
import { UserChangeStatusType } from '../../types/user-message-type';

export const userChangeStatus = ({
  currentUid,
  questionerUid,
  status,
}: UserChangeStatusType): void => {
  try {
    if (status !== null) {
      set(ref(firebaseDb, `operators/${currentUid}/questions/${questionerUid}/status`), status);
    } else {
      throw new Error('Status change error');
    }
  } catch (e) {
    console.log(e);
  }
};
