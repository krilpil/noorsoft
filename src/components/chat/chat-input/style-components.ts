import styled from 'styled-components';
import { Input as AntInput, Layout as AntLayout, Button as AntButton } from 'antd';

export const InputGroup = styled.form`
  display: flex;
`;

export const ChatInputBlock = styled(AntLayout.Footer)`
  padding: 19px 50px;
`;

export const Input = styled(AntInput).attrs({
  bordered: false,
  autoComplete: 'off',
})`
  width: 100%;
  height: min-content;
`;

export const Button = styled(AntButton)`
  width: max-content;
  border-radius: 15px;
  border: none;
  background-color: #3596fe;
  color: #ffffff;
`;
