import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { UserForgotPasswordData } from '../types/user-type';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserForgotPassword = ({ email }: UserForgotPasswordData): Promise<null | string> => {
  const auth = getAuth(initialization);

  return sendPasswordResetEmail(auth, email)
    .then(() => {
      return null;
    })
    .catch((error) => {
      return error.message;
    });
};
