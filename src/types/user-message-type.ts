import { UserDataType } from "./user-type";

export type StatusDialogType = 'active' | 'saved' | 'closed' | 'pending';

export type UserMessageType = {
  writtenBy: 'client' | 'operator';
  content: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
};

export type UserSendMessageType = Omit<UserMessageType, 'timestamp'>;

export type UserDialogType = UserDataType & {
  status: StatusDialogType | '';
};

export type UserSideMessageType = {
  status: StatusDialogType;
  userId: string;
  lastMessage: string;
  unread: number;
};

export type UserChangeStatusType = {
  userId: string;
  status: StatusDialogType;
};
