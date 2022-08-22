import React, { useEffect, useMemo, useRef } from 'react';
import { Dialog } from './style-components';
// import { IconStartDialog } from '../../icons/styled-components';
import { useAppSelector } from '../../../hooks/redux-hooks';
import { userFindDialog } from '../../../hooks/use-find-dialogs';
import Message from './message/message';

const ChatDialog: React.FC = () => {
  const dialogs = useAppSelector((state) => state.userDialogs.dialogs);
  const openDialogUid = useAppSelector((state) => state.userDialogs.openDialogUid);
  const dialog = useMemo(() => userFindDialog(dialogs, openDialogUid), [dialogs, openDialogUid]);
  const messageEndRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [dialog]);

  return (
    <Dialog>
      {/* <IconStartDialog />*/}
      {/* <p>Choose a chat</p>*/}

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
  );
};

export default ChatDialog;
