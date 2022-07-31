import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { getAuth, signOut } from 'firebase/auth';

export const UserLogoutService = (): Promise<boolean> => {
  const initialization = initializeApp(firebaseConfig);
  const auth = getAuth(initialization);

  return signOut(auth)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};
