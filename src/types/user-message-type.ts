export type UserMessageType = {
  writtenBy: 'client' | 'operator';
  content: string;
  timestamp: number;
};

export type UserSendMessageType = Omit<UserMessageType, 'timestamp'>;

export type UserDialogType = {
  name: string;
  surname: string;
  status: StatusDialogType;
  avatar: string;
  uid: string;
  messages: UserMessageType[];
};

export type UserDialogFetchType = {
  [questionerUid: string]: {
    name: string;
    surname: string;
    status: StatusDialogType;
    avatar: string;
    messages: {
      [message: string]: UserMessageType;
    };
  };
};

export type StatusDialogType = 'active' | 'saved' | 'closed';

export type UserWrittenByType = Pick<UserMessageType, 'writtenBy'>;

export type UserChangeStatusType = {
  currentUid: string;
  questionerUid: string;
  status: StatusDialogType;
};
