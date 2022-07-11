import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { UserForgotPasswordData } from '../types/user-type';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserForgotPassword = async (UserForgotPasswordData: UserForgotPasswordData) => {
  const auth = getAuth(initialization);

  return sendPasswordResetEmail(auth, UserForgotPasswordData.email)
    .then(() => {
      return {
        error: null,
      };
    })
    .catch((error) => {
      return {
        error: error.message,
      };
    });
};
