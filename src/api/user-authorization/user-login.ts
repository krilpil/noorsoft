import { UserFormData, UserData } from '../../types/user-type';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../config/firebase';

export const UserLoginService = async ({ email, password }: UserFormData): Promise<UserData> => {
  const defaultLogin: UserData = {
    isAuth: false,
    email: '',
    token: '',
    uid: '',
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
            uid: user.uid,
          };
        })
        .catch(() => defaultLogin);
    })
    .catch(() => defaultLogin);
};