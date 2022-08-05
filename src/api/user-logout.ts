import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../config/firebase';

export const UserLogoutService = (): Promise<boolean> => {
  return signOut(firebaseAuth)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};
