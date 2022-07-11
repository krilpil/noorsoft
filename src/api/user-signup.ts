import { UserData, UserFormData } from '../types/user-type';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';

const initialization = initializeApp(firebaseConfig);

export const userSignup = async (userSignupData: UserFormData): Promise<UserData> => {
  const auth = getAuth(initialization);

  return createUserWithEmailAndPassword(auth, userSignupData.email, userSignupData.password)
    .then((userCredential) => {
      const { user } = userCredential;

      return {
        authorization: true,
        email: user.email,
        token: null,
        id: null,
      };
    })
    .catch((error) => {
      console.log(error.message);

      return {
        authorization: false,
        email: null,
        token: null,
        id: null,
      };
    });
};
