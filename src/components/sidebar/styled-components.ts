import styled from 'styled-components';
import { Input as AntInput, Layout as AntLayout, Typography } from "antd";

export const Sider = styled(AntLayout.Sider).attrs({
  width: 325,
})`
  background-color: #027afe;
  overflow: scroll;
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    color: #ffffff;
    margin: 0;
  }
`;

export const InputSider = styled(AntInput)`
  & input.ant-input {
    background-color: #3596fe;
    color: #ffffff;

    &::placeholder {
      color: #ffffff;
    }
  }

  padding: 10px 15px;
  color: #ffffff;
  background-color: #3596fe;
  border: none;
  border-radius: 5px;
`;

export const SideHeader = styled.div`
  padding: 15px 20px 10px;
  display: grid;
  grid-gap: 20px;
`;
