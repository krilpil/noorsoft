import { onValue, ref } from 'firebase/database';
import { firebaseDb } from '../../config/firebase';
import { UserGetMessagesType } from '../../types/user-message-type';
import { useState } from 'react';

export const useUserGetMessage = (uId: string): UserGetMessagesType[] => {
  const [messages, setMessages] = useState<UserGetMessagesType[]>([]);
  onValue(ref(firebaseDb, `users/${uId}/messages`), (firebaseMessages) => {
    const value: UserGetMessagesType[] = Object.entries(firebaseMessages.val());
    if (JSON.stringify(value) != JSON.stringify(messages)) {
      setMessages(value);
    }
  });
  return messages;
};
