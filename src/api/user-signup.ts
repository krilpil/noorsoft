import { UserData, UserFormData } from '../types/user-type';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../config/firebase';

export const UserSignupService = async ({ email, password }: UserFormData): Promise<UserData> => {
  const defaultSignup = {
    isAuth: false,
    email: '',
    token: '',
    id: '',
  };

  return createUserWithEmailAndPassword(firebaseAuth, email, password)
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
