import { firebaseAuth } from '../../config/firebase';

export const CheckAuthService = async ({
  currentToken,
}: {
  currentToken: string;
}): Promise<boolean> => {
  const isValidToken: Promise<boolean> = new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken(false).then((correctToken) => {
          resolve(correctToken === currentToken);
        });
      }
    });
  });

  return await isValidToken;
};
