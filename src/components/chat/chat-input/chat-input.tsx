import React from 'react';
import { ChatInputText, InputGroup, ChatInputBlock } from './style-components';

const ChatInput = () => {
  return (
    <ChatInputBlock>
      <InputGroup>
        <ChatInputText />
      </InputGroup>
    </ChatInputBlock>
  );
};

export default ChatInput;
