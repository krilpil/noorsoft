import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { UserData, UserForgotPasswordData } from '../types/user-type';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const initialization = initializeApp(firebaseConfig);

export const UserForgotPassword = async (UserForgotPasswordData: UserForgotPasswordData) => {
  const auth = getAuth(initialization);

  const forgotPasswordResponse = ({
    authorization,
    email,
    phoneNumber,
    displayName,
  }: UserData): UserData => {
    return {
      authorization: authorization,
      email: email,
      displayName: displayName,
      phoneNumber: phoneNumber,
      error: null,
    };
  };

  return sendPasswordResetEmail(auth, UserForgotPasswordData.email)
    .then(() => {
      return forgotPasswordResponse({
        error: null,
      });
    })
    .catch((error) => {
      return forgotPasswordResponse({
        error: error.message,
      });
    });
};
