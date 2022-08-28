import React, { useEffect, useRef } from 'react';
import { Dialog, EmptyDialog } from './styled-components';
import { IconStartDialog } from '../../icons/styled-components';
import Message from './message/message';
import { useAppSelector } from '../../../hooks/redux-hooks';

type props = {
  openDialogUid: string;
};

const ChatDialog: React.FC<props> = ({ openDialogUid }) => {
  const currentDialogMessages = useAppSelector((state) => state.userDialogs.currentDialog.messages);
  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [currentDialogMessages]);

  return openDialogUid.length ? (
    <Dialog>
      {currentDialogMessages.map((message, index) => (
        <Message
          key={index}
          writtenBy={message.writtenBy}
          content={message.content}
          timestamp={message.timestamp}
        />
      ))}

      <div ref={messageEndRef} />
    </Dialog>
  ) : (
    <EmptyDialog>
      <div>
        <IconStartDialog />
        <p>Choose a dialog...</p>
      </div>
    </EmptyDialog>
  );
};

export default ChatDialog;
