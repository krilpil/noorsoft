import React from 'react';
import { Avatar, Badge, Details, Item, Name, Text } from './style-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { setCurrentDialog } from '../../../redux/slices/user-dialogs-slice';
import { UserDialogType } from '../../../types/user-message-type';

type Props = {
  dialog: UserDialogType;
  unread: number;
  lastMessage: string;
};

const SideMessage: React.FC<Props> = ({ dialog, unread, lastMessage }) => {
  const dispatch = useAppDispatch();
  const currentDialogUid = useAppSelector((state) => state.userDialogs.currentDialog.uid);
  const { uid, name, surname, avatar } = dialog;

  return (
    <Item
      active={currentDialogUid === uid}
      onClick={() => {
        dispatch(setCurrentDialog(dialog));
      }}
    >
      <Avatar src={avatar} />
      <Details>
        <Name>
          {name} {surname}
        </Name>
        <Text>{lastMessage}</Text>
      </Details>
      <Badge count={unread} />
    </Item>
  );
};

export default SideMessage;
