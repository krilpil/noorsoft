import React from 'react';
import { Layout, Sider, Title, SideHeader, DialogBlock, InputSider } from './styled-components';
import {
  IconCheck,
  IconClose,
  IconSave,
  IconSearchInput,
} from '../../components/icons/styled-components';
import { Helpers } from '../../components/form/styled-components';
import Message from '../../components/dialog/dialog';
import ChatInput from '../../components/chat/chat-input/chat-input';
import ChatDialog from '../../components/chat/chat-dialog/chat-dialog';
import { useAuth } from '../../hooks/use-auth';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <Layout>
      <Sider>
        <SideHeader>
          <Title level={3}>Noorsoft</Title>
          <InputSider placeholder={'Search here...'} prefix={<IconSearchInput />} />
          <Helpers content={'between'}>
            <IconCheck active title={'Active dialogs'} />
            <IconSave title={'Saved dialogs'} />
            <IconClose title={'Closed dialogues'} />
          </Helpers>
        </SideHeader>
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
      </Sider>
      <DialogBlock>
        <ChatDialog />
        <ChatInput />
      </DialogBlock>
    </Layout>
  ) : (
    <Navigate to={'/login'} />
  );
};

export default HomePage;
