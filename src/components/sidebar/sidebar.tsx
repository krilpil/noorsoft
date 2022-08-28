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
import { setSideMessagesStatus } from '../../redux/slices/user-dialogs-slice';
import SideMessage from './side-message/side-message';
import SearchMessage from './search-message/search-message';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const userDialogs = useAppSelector((state) => state.userDialogs.dialogs);
  const findDialogs = useAppSelector((state) => state.userDialogs.findMessages);
  const sideDialogs = findDialogs || userDialogs;
  const messagesStatus = useAppSelector((state) => state.userDialogs.currentDialog.status);

  return (
    <Sider>
      <SiderLoyout>
        <SideHeader>
          <Title level={3}>Noorsoft</Title>
          <SearchMessage />
          <Helpers content={'between'}>
            <IconCheck
              active={messagesStatus === 'active'}
              title={'Active dialogs'}
              onClick={() => dispatch(setSideMessagesStatus('active'))}
            />
            <IconSave
              active={messagesStatus === 'saved'}
              title={'Saved dialogs'}
              onClick={() => dispatch(setSideMessagesStatus('saved'))}
            />
            <IconClose
              active={messagesStatus === 'closed'}
              title={'Closed dialogues'}
              onClick={() => dispatch(setSideMessagesStatus('closed'))}
            />
          </Helpers>
        </SideHeader>
        {/* // TODO: Remove avatar update when receiving/sending a side-message*/}
        <SideMessages>
          {sideDialogs.map((dialog, index) => {
            const { messages, status } = dialog;
            if (status === messagesStatus) {
              return (
                <SideMessage
                  key={index}
                  dialog={dialog}
                  lastMessage={messages[messages.length - 1].content}
                  unread={1}
                />
              );
            }
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
