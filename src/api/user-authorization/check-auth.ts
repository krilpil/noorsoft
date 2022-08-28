import { firebaseAuth } from '../../config/firebase';

export const CheckAuthService = async (currentToken: string): Promise<boolean> => {
  return new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken(false).then((correctToken) => {
          resolve(correctToken === currentToken);
        });
      } else {
        resolve(false);
      }
    });
  }).then((isAuth) => {
    if (isAuth) return true;
    throw new Error('Authentication error');
  });
};
