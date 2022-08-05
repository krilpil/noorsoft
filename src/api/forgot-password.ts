import { firebaseAuth } from '../config/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

export const UserForgotPasswordService = (email: string): Promise<string> => {
  return sendPasswordResetEmail(firebaseAuth, email)
    .then(() => {
      return '';
    })
    .catch((error) => {
      return error.message;
    });
};
