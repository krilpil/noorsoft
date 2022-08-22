import React from 'react';
import {
  SideHeader,
  SideMessages,
  SidePanel,
  Sider,
  SiderLoyout,
  Title,
} from './styled-components';
import { ArrowFromBracket, IconCheck, IconClose, IconSave } from '../icons/styled-components';
import { Helpers } from '../form/styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { userLogout } from '../../redux/slices/user-authorization-slice';
import SideMessage from './side-message/side-message';
import SearchMessage from './search-message/search-message';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const dialogs = useAppSelector((state) => state.userDialogs.dialogs);

  return (
    <Sider>
      <SiderLoyout>
        <SideHeader>
          <Title level={3}>Noorsoft</Title>
          <SearchMessage />
          <Helpers content={'between'}>
            <IconCheck active title={'Active dialogs'} />
            <IconSave title={'Saved dialogs'} />
            <IconClose title={'Closed dialogues'} />
          </Helpers>
        </SideHeader>
        {/* // TODO: Remove avatar update when receiving/sending a side-message*/}
        <SideMessages>
          {dialogs.map(({ avatar, name, surname, messages, uid }, index) => {
            return (
              <SideMessage
                key={index}
                uid={uid}
                avatar={avatar}
                name={name}
                surname={surname}
                lastMessage={messages[messages.length - 1].content}
                unread={1}
              />
            );
          })}
        </SideMessages>
        <SidePanel>
          <ArrowFromBracket title={'Log out'} onClick={() => dispatch(userLogout())} />
        </SidePanel>
      </SiderLoyout>
    </Sider>
  );
};

export default React.memo(Sidebar);
