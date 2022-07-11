import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { UserResetPasswordData } from '../types/user-type';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserResetPassword = async ({ password, code }: UserResetPasswordData) => {
  const auth = getAuth(initialization);

  return confirmPasswordReset(auth, code, password)
    .then(() => {
      return {
        error: null,
      };
    })
    .catch((error) => {
      console.log(error.message);
      return {
        error: error.message,
      };
    });
};
