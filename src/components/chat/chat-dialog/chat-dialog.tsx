import React, { useEffect, useRef } from 'react';
import { Dialog } from './style-components';
// import { IconStartDialog } from '../../icons/styled-components';
import Message from './message/message';
import { UserGetMessagesType } from '../../../types/user-message-type';

type Props = {
  messages: UserGetMessagesType[];
};

const ChatDialog: React.FC<Props> = ({ messages }) => {
  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <Dialog>
      {/* <IconStartDialog />*/}
      {/* <p>Choose a chat</p>*/}

      {messages.map((message) => (
        <Message
          key={message[1].timestamp}
          writtenBy={message[1].writtenBy}
          content={message[1].content}
          timestamp={message[1].timestamp}
        />
      ))}

      <div ref={messageEndRef} />
    </Dialog>
  );
};

export default ChatDialog;
