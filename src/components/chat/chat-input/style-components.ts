import styled from 'styled-components';
import { Button as AntButton, Input as AntInput, Layout as AntLayout } from 'antd';

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
  background-color: #027afe;
  color: #ffffff;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #3596fe;
    background: #3596fe;
  }
`;
