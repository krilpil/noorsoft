import React, { useEffect } from 'react';
import {
  SideHeader,
  SideMessages,
  SidePanel,
  Sider,
  SiderLoyout,
  Title,
} from './styled-components';
import { ArrowFromBracket } from '../icons/styled-components';
import {
  faComment,
  faCommentDots,
  faComments,
  faCommentSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Helpers } from '../form/styled-components';
import { userLogout } from '../../redux/slices/user-authorization-slice';
import SearchMessage from './search-message/search-message';
import ButtonDialog from './button-dialog/button-dialog';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import SideMessage from './side-message/side-message';
import { fetchSideDialogsStatus } from '../../redux/slices/side-dialogs-slice';

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const operator = useAppSelector((state) => state.userAuth.uid);
  const messagesStatus = useAppSelector((state) => state.sideDialogs.status);
  const sideMessages = useAppSelector((state) => state.sideDialogs.dialogs);

  useEffect(() => {
    dispatch(fetchSideDialogsStatus({ status: messagesStatus, operator }));
  }, []);

  return (
    <Sider>
      <SiderLoyout>
        <SideHeader>
          <Title level={3}>Noorsoft</Title>
          <SearchMessage />
          <Helpers content={'between'}>
            <ButtonDialog status={'pending'} icon={faComment} description={'Pending dialogs'} />
            <ButtonDialog status={'active'} icon={faComments} description={'Active dialogs'} />
            <ButtonDialog status={'saved'} icon={faCommentDots} description={'Saved dialogs'} />
            <ButtonDialog status={'closed'} icon={faCommentSlash} description={'Closed dialogs'} />
          </Helpers>
        </SideHeader>
        {/* // TODO: Add caching to firebase*/}
        <SideMessages>
          {sideMessages.map(({ status, userId, lastMessage, unread }, index) => {
            return (
              <SideMessage
                key={index}
                userId={userId}
                status={status}
                lastMessage={lastMessage}
                unread={unread}
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
