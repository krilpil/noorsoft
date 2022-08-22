import React from 'react';
import { Avatar, Badge, Details, Item, Name, Text } from './style-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { setOpenDialogs } from '../../../redux/slices/user-dialogs-slice';
import { UserDialogType } from '../../../types/user-message-type';

type Props = Omit<UserDialogType, 'messages'> & {
  unread: number;
  lastMessage: string;
};

const SideMessage: React.FC<Props> = ({ avatar, name, surname, uid, lastMessage, unread }) => {
  const dispatch = useAppDispatch();
  const openDialogUid = useAppSelector((state) => state.userDialogs.openDialogUid);

  return (
    <Item active={openDialogUid === uid} onClick={() => dispatch(setOpenDialogs(uid))}>
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
