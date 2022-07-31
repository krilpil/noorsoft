import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase';
import { getAuth } from 'firebase/auth';

export const CheckAuthService = async ({
  currentToken,
}: {
  currentToken: string;
}): Promise<boolean> => {
  const initialization = initializeApp(firebaseConfig);
  const auth = getAuth(initialization);

  const isValidToken: Promise<boolean> = new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken(false).then((correctToken) => {
          resolve(correctToken === currentToken);
        });
      }
    });
  });

  return await isValidToken;
};
