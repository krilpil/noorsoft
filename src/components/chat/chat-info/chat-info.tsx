import React from 'react';
import { Info, Name, Settings, SettingsButton } from './styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { itemsMenuChat, itemsMenuChatType } from '../../../const/items-menu-chat';
import { Ellipsis } from '../../icons/styled-components';
import { setQuestionStatus } from '../../../redux/slices/current-dialogs-slice';
import { StatusDialogType } from '../../../types/user-message-type';
import { getAvatarLabel } from '../../../helpers/avatar-label';
import { Avatar } from '../../avatar/style-components';

const ChatInfo = () => {
  const dispatch = useAppDispatch();
  const operatorId = useAppSelector((state) => state.userAuth.uid);
  const { name, surname, status, userId } = useAppSelector((state) => state.currentDialog);

  const onClickSettings: MenuProps['onClick'] = ({ key }) => {
    const status = key as StatusDialogType;
    dispatch(setQuestionStatus({ operatorId, questionId: userId, status }));
  };

  const settingsItems = itemsMenuChat.reduce((accum: itemsMenuChatType[], item) => {
    if (item.key !== status) accum.push(item);
    return accum;
  }, []);

  return (
    <Info>
      <Avatar>{getAvatarLabel({ name, surname })}</Avatar>
      <Name>
        {name} {surname}
      </Name>
      <Settings>
        <SettingsButton
          icon={<Ellipsis />}
          overlay={<Menu onClick={onClickSettings} items={settingsItems} />}
        />
      </Settings>
    </Info>
  );
};

export default ChatInfo;
