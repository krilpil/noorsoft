import React from 'react';
import { MessageBlock } from './style-components';
import { Text, Time } from '../style-components';
import { UserMessageType } from '../../../../types/user-message-type';
import { firebaseTime } from '../../../../helpers/firebase-timestamp';

const Message: React.FC<UserMessageType> = ({ content, timestamp, writtenBy }) => {
  return (
    <MessageBlock writtenBy={writtenBy}>
      <Text>{content}</Text>
      <Time>{firebaseTime(timestamp)}</Time>
    </MessageBlock>
  );
};

export default Message;
