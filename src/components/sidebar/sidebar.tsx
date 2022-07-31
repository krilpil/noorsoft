import React from 'react';
import {
  Sider,
  InputSider,
  SideHeader,
  Title,
  SideMessages,
  SidePanel,
  SiderLoyout,
} from './styled-components';
import {
  ArrowFromBracket,
  IconCheck,
  IconClose,
  IconSave,
  IconSearchInput,
} from '../icons/styled-components';
import { Helpers } from '../form/styled-components';
import Message from '../message/message';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { userLogout } from '../../redux/reducers/form-reducers';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <Sider>
      <SiderLoyout>
        <SideHeader>
          <Title level={3}>Noorsoft</Title>
          <InputSider placeholder={'Search here...'} prefix={<IconSearchInput />} />
          <Helpers content={'between'}>
            <IconCheck active title={'Active dialogs'} />
            <IconSave title={'Saved dialogs'} />
            <IconClose title={'Closed dialogues'} />
          </Helpers>
        </SideHeader>
        <SideMessages>
          <Message
            src={'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg'}
            name={'Neo'}
            message={'I shouldnt have chosen the red pill'}
            unread={1}
          />
          <Message
            src={
              'https://cdna.artstation.com/p/assets/images/images/033/451/774/large/marcin-blaszczak-tr-coat-05.jpg?1609664523'
            }
            name={'Trinity'}
            message={'Do you still love me?'}
            unread={100}
          />
          <Message
            src={
              'https://cdnb.artstation.com/p/assets/images/images/033/670/305/large/marcin-blaszczak-m-coat-01.jpg?1610270916'
            }
            name={'Morpheus'}
            message={'Arent you interested in pills?'}
            unread={0}
          />
          <Message
            src={
              'https://upload.wikimedia.org/wikipedia/en/1/1f/Agent_Smith_%28The_Matrix_series_character%29.jpg'
            }
            name={'Smith'}
            message={'Hi, where can I meet you?'}
            unread={18}
          />
        </SideMessages>
        <SidePanel>
          <ArrowFromBracket title={'Log out'} onClick={() => dispatch(userLogout())} />
        </SidePanel>
      </SiderLoyout>
    </Sider>
  );
};

export default Sidebar;
