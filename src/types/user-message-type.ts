export type UserMessageType = {
  writtenBy: 'client' | 'operator';
  content: string;
  timestamp: number;
};

export type UserSendMessageType = Omit<UserMessageType, 'timestamp'>;

export type UserDialogType = {
  name: string;
  surname: string;
  avatar: string;
  uid: string;
  messages: UserMessageType[];
};

export type UserWrittenByType = Pick<UserMessageType, 'writtenBy'>;
