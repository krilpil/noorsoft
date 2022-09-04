import { StatusDialogType } from './user-message-type';

export type actionType<Payload = string> = {
  type: string;
  payload: Payload;
};

export type ResetPasswordFormType = {
  password: string;
  code: string;
};

export type FindMessagesType = {
  request: string;
  status: StatusDialogType;
};
