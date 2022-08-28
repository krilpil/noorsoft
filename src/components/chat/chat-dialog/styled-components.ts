import styled from 'styled-components';
import { Layout as AntLayout, Typography } from 'antd';

export const Dialog = styled(AntLayout.Content)`
  color: #3596fe;
  display: flex;
  flex-direction: column;
  //justify-content: flex-end;
  grid-gap: 5px;
  padding: 30px;
  overflow-y: scroll;
`;

export const EmptyDialog = styled(AntLayout.Content)`
  display: flex;
  color: #3596fe;
  align-items: center;
  align-self: center;
  text-align: center;
`;

export const Text = styled(Typography.Paragraph)`
  &.ant-typography {
    margin-bottom: 0;
  }

  color: #ffffff;
`;

export const Time = styled(Typography.Paragraph)`
  &.ant-typography {
    margin-bottom: 0;
  }

  color: #ffffff;
`;
