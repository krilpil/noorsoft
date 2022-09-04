import { Timestamp } from 'firebase/firestore';

type dateType = {
  seconds: number;
  nanoseconds: number;
};

export const firebaseTime = ({ seconds }: dateType): string => {
  const date = Timestamp.fromMillis(seconds * 1000).toDate();
  return `${addZeros(date.getHours())}:${addZeros(date.getMinutes())}`;
};

const addZeros = (time: number) => {
  return time < 10 ? `0${time}` : time;
};
