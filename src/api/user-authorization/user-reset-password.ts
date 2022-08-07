import { confirmPasswordReset } from 'firebase/auth';
import { firebaseAuth } from '../../config/firebase';

export const UserResetPasswordService = async (password: string, code: string): Promise<string> => {
  return confirmPasswordReset(firebaseAuth, code, password)
    .then(() => {
      return '';
    })
    .catch((error) => {
      return error.message;
    });
};
