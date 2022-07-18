import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { UserResetPasswordData } from '../types/user-type';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserResetPassword = async ({
  password,
  code,
}: UserResetPasswordData): Promise<null | string> => {
  const auth = getAuth(initialization);

  return confirmPasswordReset(auth, code, password)
    .then(() => {
      return null;
    })
    .catch((error) => {
      return error.message;
    });
};
