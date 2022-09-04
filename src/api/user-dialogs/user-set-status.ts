import { doc, setDoc } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { UserChangeStatusType } from '../../types/user-message-type';

export const userSetStatus = ({ userId, status }: UserChangeStatusType): void => {
  try {
    setDoc(doc(firestoreDb, 'questions', userId), { status: status }, { merge: true });
  } catch (e) {
    console.log(e);
  }
};
