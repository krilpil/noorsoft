import React from 'react';
import { Dialog } from './style-components';
// import { IconStartDialog } from '../../icons/styled-components';
import MessageRecipient from './message-recipient/message-recipient';
import MessageSender from './message-sender/message-sender';

const ChatDialog = () => {
  return (
    <Dialog>
      {/* <IconStartDialog />*/}
      {/* <p>Choose a chat</p>*/}

      <MessageSender text={"I'm okay, how are you?"} time={'16:05'} />
      <MessageRecipient text={'How are u?'} time={'16:01'} />
      <MessageRecipient text={'Hi'} time={'16:00'} />
    </Dialog>
  );
};

export default ChatDialog;
