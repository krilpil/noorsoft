import styled, { css } from 'styled-components';
import { Button as AntButton, Input as AntInput, Typography } from 'antd';

const AntTitle = Typography.Title;

export const Form = styled.form`
  display: grid;
  text-align: center;
  grid-gap: 15px;
  max-width: 350px;
  width: 100%;
  padding: 20px;
  color: #ffffff;
`;

export const Title = styled(AntTitle)`
  &.ant-typography {
    color: #ffffff;
  }
`;

const InputsStyle = css`
  padding: 10px;
  border-radius: 15px;
`;

export const Input = styled(AntInput)`
  ${InputsStyle};
`;

export const Password = styled(AntInput.Password)`
  ${InputsStyle};
`;

export const Button = styled(AntButton)`
  ${InputsStyle};
  height: auto;
`;

export const Helpers = styled.div<{ content: 'between' | 'center' }>`
  display: flex;
  justify-content: ${(props) => (props.content === 'between' ? 'space-between' : 'center')};
  gap: ${(props) => (props.content === 'between' ? null : '15px')};
  align-content: space-between;
`;

export const ButtonLink = styled(Button).attrs({
  type: 'link',
})`
  color: #ebebeb;
  padding: 0;
`;
