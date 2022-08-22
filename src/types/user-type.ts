import { UserMessageType } from './user-message-type';

export type UserFormData = {
  email: string;
  password: string;
};

export type UserData = {
  isAuth: boolean;
  email: string;
  token: string;
  uid: string;
};

export type UserType = {
  avatar: string;
  name: string;
  surname: string;
  status: string;
  operatorId: string;
  messages: UserMessageType[];
};
