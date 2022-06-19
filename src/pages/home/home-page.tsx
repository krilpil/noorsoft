import React from 'react';
import {
  Layout,
  Sider,
  Title,
  Input,
  SideHeader,
  DialogSelection,
  DialogBlock,
} from './styled-components';
import {
  IconCheck,
  IconClose,
  IconSave,
  IconSearchInput,
  IconStartDialog,
} from '../../components/icons/styled-components';
import { Helpers } from '../../components/form/styled-components';
import Message from '../../components/dialog/dialog';

const HomePage = () => {
  return (
    <Layout>
      <Sider>
        <SideHeader>
          <Title level={3}>Noorsoft</Title>
          <Input placeholder={'Search here...'} prefix={<IconSearchInput />} />
          <Helpers content={'between'}>
            <IconCheck active={true} title={'Active dialogs'} />
            <IconSave active={false} title={'Saved dialogs'} />
            <IconClose active={false} title={'Closed dialogues'} />
          </Helpers>
        </SideHeader>
        <Message
          src={'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Neo2.jpg/274px-Neo2.jpg'}
          name={'Neo'}
          message={"I shouldn't have chosen the red pill"}
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
          message={"Aren't you interested in pills?"}
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
        <DialogSelection>
          <IconStartDialog />
          Choose a chat
        </DialogSelection>
      </DialogBlock>
    </Layout>
  );
};

export default HomePage;
