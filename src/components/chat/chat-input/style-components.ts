import styled from 'styled-components';
import { Input as AntInput, Layout as AntLayout } from 'antd';

export const InputGroup = styled(AntInput.Group).attrs({
  compact: true,
})``;

export const ChatInputBlock = styled(AntLayout.Footer)``;

export const ChatInputText = styled(AntInput.Search).attrs({
  bordered: false,
  placeholder: 'Write a message...',
  enterButton: 'Send',
})`
  & > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
    border-radius: 15px;
  }
`;
