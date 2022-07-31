import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserForgotPasswordService = (email: string): Promise<string> => {
  const auth = getAuth(initialization);

  return sendPasswordResetEmail(auth, email)
    .then(() => {
      return '';
    })
    .catch((error) => {
      return error.message;
    });
};
