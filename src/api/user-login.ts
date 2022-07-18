import { UserFormData, UserData } from '../types/user-type';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

const initialization = initializeApp(firebaseConfig);

export const userLogin = async ({ email, password }: UserFormData): Promise<UserData> => {
  const auth = getAuth(initialization);

  const defaultLogin = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
  };

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      return user
        .getIdToken(false)
        .then((idToken) => {
          return {
            isAuth: true,
            email: user.email,
            token: idToken,
            id: user.uid,
          };
        })
        .catch(() => defaultLogin);
    })
    .catch(() => defaultLogin);
};
