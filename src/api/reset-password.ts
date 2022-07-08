import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { UserData, UserResetPasswordData } from '../types/user-type';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserResetPassword = async ({ password, code }: UserResetPasswordData) => {
  const auth = getAuth(initialization);

  const resetPasswordResponse = ({ error }: UserData): UserData => {
    return {
      error: error,
    };
  };

  return confirmPasswordReset(auth, code, password)
    .then(() => {
      return resetPasswordResponse({
        error: null,
      });
    })
    .catch((error) => {
      console.log(error.message);
      return resetPasswordResponse({
        error: error.message,
      });
    });
};
