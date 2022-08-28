import { confirmPasswordReset } from 'firebase/auth';
import { firebaseAuth } from '../../config/firebase';

type UserResetPasswordServiceType = {
  password: string;
  code: string;
};

export const UserResetPasswordService = async ({
  password,
  code,
}: UserResetPasswordServiceType): Promise<string> => {
  return confirmPasswordReset(firebaseAuth, code, password)
    .then(() => {
      return '';
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
