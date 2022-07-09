import styled from 'styled-components';
import { Layout as AntLayout, Typography } from 'antd';

export const Dialog = styled(AntLayout.Content)`
  color: #3596fe;
  display: flex;
  flex-direction: column-reverse;
  //justify-content: flex-end;
  overflow: scroll;
  grid-gap: 5px;
  padding: 30px;
`;

export const Message = styled(Typography.Paragraph)`
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
