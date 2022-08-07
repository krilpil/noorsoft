export type UserMessageType = {
  uId: string;
  writtenBy: 'client' | 'operator';
  content: string;
  timestamp: number;
};

export type UserGetMessagesType = [string, UserGetMessageType];

export type UserSendMessageType = Omit<UserMessageType, 'timestamp'>;

export type UserGetMessageType = Omit<UserMessageType, 'uId'>;

export type UserWrittenByType = Pick<UserMessageType, 'writtenBy'>;
