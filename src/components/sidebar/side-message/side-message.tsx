import React from 'react';
import { Badge, Details, Item, Name, Text } from './style-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import {
  fetchCurrentMessages,
  setCurrentDialogUser,
} from '../../../redux/slices/current-dialogs-slice';
import { UserSideMessageType } from '../../../types/user-message-type';
import { useGetUserData } from '../../../api/user-dialogs/user-get-data';
import { getAvatarLabel } from '../../../helpers/avatar-label';
import { Avatar } from '../../avatar/style-components';

const SideMessage: React.FC<UserSideMessageType> = ({ status, userId, lastMessage, unread }) => {
  const dispatch = useAppDispatch();
  const { name, surname } = useGetUserData(userId);
  const currentDialogUid = useAppSelector((state) => state.currentDialog.userId);

  return (
    <Item
      active={currentDialogUid === userId}
      onClick={() => {
        dispatch(setCurrentDialogUser({ userId, name, surname, status }));
        dispatch(fetchCurrentMessages(userId));
      }}
    >
      <Avatar>{getAvatarLabel({ name, surname })}</Avatar>
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
