import { UserFormData, UserData } from '../types/user-type';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

const initialization = initializeApp(firebaseConfig);

export const userLogin = async (userLoginData: UserFormData): Promise<UserData> => {
  const auth = getAuth(initialization);

  const loginResponse = ({
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
    };
  };

  return signInWithEmailAndPassword(auth, userLoginData.email, userLoginData.password)
    .then((userCredential) => {
      const { user } = userCredential;

      return loginResponse({
        authorization: true,
        phoneNumber: user.phoneNumber,
        email: user.email,
        displayName: user.displayName,
      });
    })
    .catch(() => {
      return loginResponse({
        authorization: false,
      });
    });
};
