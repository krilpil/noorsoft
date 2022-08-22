import React, { useEffect, useRef } from 'react';
import { Dialog, EmptyDialog } from './style-components';
import { IconStartDialog } from '../../icons/styled-components';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { useFindDialog } from '../../../hooks/use-find-dialogs';
import Message from './message/message';

const ChatDialog: React.FC = () => {
  const openDialogUid = useAppSelector((state) => state.userDialogs.openDialogUid);
  const dialog = useFindDialog(openDialogUid);
  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [dialog]);

  return openDialogUid.length ? (
    <Dialog>
      {dialog.map((message, index) => (
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
