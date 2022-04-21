import styled, {css} from "styled-components";
import {Button as AntButton, Input as AntInput, Typography} from 'antd';

const AntTitle = Typography.Title;
const AntParagraph = Typography.Paragraph;

export const LoginPageWrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-items: center;
  background-color: #027afe;
`

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

export const Paragraph = styled(AntParagraph)`
  color: #ffffff;
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