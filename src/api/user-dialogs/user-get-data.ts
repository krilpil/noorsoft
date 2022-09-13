import { doc, getDoc } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { UserDataType } from '../../types/user-type';
import { useEffect, useState } from 'react';

export const useGetUserData = (userId: string): UserDataType => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');

  useEffect(() => {
    getDoc(doc(firestoreDb, 'users', userId)).then((userData) => {
      if (userData.exists()) {
        setName(userData.data().name);
        setSurname(userData.data().surname);
      }
    });
  }, [userId]);

  return { userId, name, surname };
};
