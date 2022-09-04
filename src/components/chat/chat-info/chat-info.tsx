import React from 'react';
import { Info, Name, Settings, SettingsButton } from './styled-components';
import { Avatar } from '../../sidebar/side-message/style-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { itemsMenuChat, itemsMenuChatType } from '../../../const/items-menu-chat';
import { Ellipsis } from '../../icons/styled-components';
import { setQuestionStatus } from '../../../redux/slices/current-dialogs-slice';
import { StatusDialogType } from '../../../types/user-message-type';

const ChatInfo = () => {
  const dispatch = useAppDispatch();
  const { avatar, name, surname, status, userId } = useAppSelector((state) => state.currentDialog);

  const onClickSettings: MenuProps['onClick'] = ({ key }) => {
    const status = key as StatusDialogType;
    dispatch(setQuestionStatus({ userId, status }));
  };

  const settingsItems = itemsMenuChat.reduce((accum: itemsMenuChatType[], item) => {
    if (item.key !== status) accum.push(item);
    return accum;
  }, []);

  return (
    <Info>
      <Avatar src={avatar} />
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
