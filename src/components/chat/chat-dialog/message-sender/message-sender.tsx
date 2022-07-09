import React from 'react';
import { MessageType } from '../../../../types/chat-type';
import { Sender } from './style-components';
import { Message, Time } from '../style-components';

const MessageSender = ({ text, time }: MessageType) => {
  return (
    <div>
      <Sender>
        <Message>{text}</Message>
        <Time>{time}</Time>
      </Sender>
    </div>
  );
};

export default MessageSender;
