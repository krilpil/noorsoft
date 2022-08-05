import { UserFormData, UserData } from '../types/user-type';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../config/firebase';

export const UserLoginService = async ({ email, password }: UserFormData): Promise<UserData> => {
  const defaultLogin = {
    isAuth: false,
    email: '',
    token: '',
    id: '',
  };

  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      return user
        .getIdToken(false)
        .then((idToken) => {
          return {
            isAuth: true,
            email: user.email || email,
            token: idToken,
            id: user.uid,
          };
        })
        .catch(() => defaultLogin);
    })
    .catch(() => defaultLogin);
};
