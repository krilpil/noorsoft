import { Timestamp } from 'firebase/firestore';

export const firebaseTimestamp = (): number => {
  return Timestamp.now().toMillis();
};

export const firebaseTime = (millis: number): string => {
  const date = Timestamp.fromMillis(millis).toDate();
  return `${addZeros(date.getHours())}:${addZeros(date.getMinutes())}`;
};

const addZeros = (time: number) => {
  return time < 10 ? `0${time}` : time;
};
