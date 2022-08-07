import React from 'react';
import { Input, Button, InputGroup, ChatInputBlock } from './style-components';
import { useFormik } from 'formik';
import { userSendMessage } from '../../../api/user-dialogs/user-send-message';
import { useAppSelector } from '../../../hooks/redux-hooks';

const ChatInput = () => {
  const uId = useAppSelector((state) => state.root.user.uid);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values, actions) => {
      userSendMessage({ uId, writtenBy: 'operator', content: values.message });
      formik.values.message = '';
      actions.setSubmitting(false);
    },
  });

  return (
    <ChatInputBlock>
      <InputGroup onSubmit={formik.handleSubmit}>
        <Input
          name={'message'}
          id={'message'}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          placeholder={'Write a message...'}
        />
        <Button id={'button'} htmlType={'submit'}>
          Send
        </Button>
      </InputGroup>
    </ChatInputBlock>
  );
};

export default ChatInput;
