import { UserFormData } from '../../types/user-type';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../config/firebase';

export const UserSignupService = async ({ email, password }: UserFormData): Promise<string> => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then(() => {
      return '';
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
