import styled, {css} from "styled-components";
import {Button as AntButton, Input as AntInput, Typography} from 'antd';

const AntTitle = Typography.Title;

export const Form = styled.form`
  display: grid;
  text-align: center;
  grid-gap: 15px;
  max-width: 350px;
  width: 100%;
  padding: 20px;
`

export const Title = styled(AntTitle)`
  &.ant-typography {
    color: #ffffff;
  }
`

const InputsStyle = css`
  padding: 10px;
  border-radius: 15px;
`

export const Input = styled(AntInput)`
  ${InputsStyle};
`

export const Password = styled(AntInput.Password)`
  ${InputsStyle};
`

export const Button = styled(AntButton)`
  ${InputsStyle};
  height: auto;
`

export const Helpers = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: space-between;
`

export const ButtonLink = styled(Button).attrs({
  type: 'link'
})`
  color: #ebebeb;
  padding: 0;
`