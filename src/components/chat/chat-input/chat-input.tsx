import React from 'react';
import { Button, ChatInputBlock, Input, InputGroup } from './style-components';
import { useFormik } from 'formik';
import { userSendMessage } from '../../../api/user-dialogs/user-send-message';
import { useAppSelector } from '../../../hooks/redux-hooks';

const ChatInput: React.FC = () => {
  const currentDialogUid = useAppSelector((state) => state.currentDialog.userId);

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values, actions) => {
      if (values.message) {
        userSendMessage({
          questionId: currentDialogUid,
          writtenBy: 'operator',
          content: values.message,
        });
        formik.values.message = '';
        actions.setSubmitting(false);
      }
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
          disabled={!currentDialogUid}
        />
        <Button
          id={'button'}
          htmlType={'submit'}
          disabled={!currentDialogUid || !formik.values.message}
        >
          Send
        </Button>
      </InputGroup>
    </ChatInputBlock>
  );
};

export default ChatInput;
