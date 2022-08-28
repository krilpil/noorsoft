import { UserData, UserFormData } from '../../types/user-type';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../config/firebase';

export const UserLoginService = async ({ email, password }: UserFormData): Promise<UserData> => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      return user.getIdToken(false).then((idToken) => {
        return {
          isAuth: true,
          email: user.email || email,
          token: idToken,
          uid: user.uid,
        };
      });
    })
    .catch(() => {
      throw new Error('The user was not logged in');
    });
};
