import { UserFormData, UserData } from '../types/user-type';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

const initialization = initializeApp(firebaseConfig);

export const userLogin = async (userLoginData: UserFormData): Promise<UserData> => {
  const auth = getAuth(initialization);

  return signInWithEmailAndPassword(auth, userLoginData.email, userLoginData.password)
    .then((userCredential) => {
      const { user } = userCredential;

      return {
        authorization: true,
        email: user.email,
        token: user.refreshToken,
        id: user.uid,
      };
    })
    .catch(() => {
      return {
        authorization: false,
        email: null,
        token: null,
        id: null,
      };
    });
};
