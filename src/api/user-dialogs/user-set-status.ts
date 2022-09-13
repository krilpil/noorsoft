import { doc, setDoc } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { UserChangeStatusType } from '../../types/user-message-type';

export const userSetStatus = ({ operatorId, questionId, status }: UserChangeStatusType): void => {
  try {
    setDoc(
      doc(firestoreDb, 'questions', questionId),
      { status: status, operator: operatorId },
      { merge: true }
    );
  } catch (e) {
    console.log(e);
  }
};
