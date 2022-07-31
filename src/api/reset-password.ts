import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserResetPasswordService = async (password: string, code: string): Promise<string> => {
  const auth = getAuth(initialization);

  return confirmPasswordReset(auth, code, password)
    .then(() => {
      return '';
    })
    .catch((error) => {
      return error.message;
    });
};
