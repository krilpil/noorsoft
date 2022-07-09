import React from 'react';
import { Recipient } from './style-components';
import { Message, Time } from '../style-components';
import { MessageType } from '../../../../types/chat-type';

const MessageRecipient = ({ text, time }: MessageType) => {
  return (
    <Recipient>
      <Message>{text}</Message>
      <Time>{time}</Time>
    </Recipient>
  );
};

export default MessageRecipient;
