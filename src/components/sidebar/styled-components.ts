import styled from 'styled-components';
import { Input as AntInput, Layout as AntLayout, Typography } from 'antd';

export const Sider = styled(AntLayout.Sider).attrs({
  width: 325,
})`
  & .ant-layout-sider-children {
    width: inherit;
  }
`;

export const SiderLoyout = styled(AntLayout)`
  background-color: #027afe;
  width: inherit;
  height: inherit;
`;

export const Title = styled(Typography.Title)`
  &.ant-typography {
    color: #ffffff;
    margin: 0;
  }
`;

export const SideHeader = styled(AntLayout.Header)`
  height: max-content;
  padding: 15px 20px 10px;
  display: grid;
  grid-gap: 20px;
  background-color: #027afe;
`;

export const SideMessages = styled(AntLayout.Content)`
  overflow: scroll;
`;

export const SidePanel = styled.div`
  padding: 22px;
  direction: rtl;
`;
