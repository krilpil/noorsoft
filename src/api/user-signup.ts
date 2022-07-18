import { UserData, UserFormData } from '../types/user-type';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

const initialization = initializeApp(firebaseConfig);

export const userSignup = async ({ email, password }: UserFormData): Promise<UserData> => {
  const auth = getAuth(initialization);

  const defaultSignup = {
    isAuth: false,
    email: null,
    token: null,
    id: null,
  };

  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      return {
        ...defaultSignup,
        isAuth: true,
      };
    })
    .catch((error) => {
      console.log(error.message);
      return {
        ...defaultSignup,
      };
    });
};
