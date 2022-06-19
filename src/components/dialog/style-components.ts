import styled from 'styled-components';
import { Badge as AntBadge, Typography, Avatar as AntAvatar } from 'antd';

export const Avatar = styled(AntAvatar).attrs({
  size: 50,
})``;

export const Name = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
`;

export const Text = styled(Typography.Paragraph).attrs({
  ellipsis: { rows: 1 },
})`
  &.ant-typography {
    color: #ffffff;
    margin-bottom: 0;
  }
`;

export const Details = styled.div`
  display: grid;
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: max-content auto max-content;
  grid-gap: 15px;
  cursor: pointer;
  padding: 10px 20px;

  &:hover {
    background-color: #3596fe;
  }
`;

export const Badge = styled(AntBadge)`
  & .ant-badge-count {
    background-color: #ffffff;
    font-weight: 600;
    color: #1890ff;
  }
  align-self: center;
`;
