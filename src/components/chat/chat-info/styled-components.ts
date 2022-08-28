import styled from 'styled-components';
import { Dropdown, Layout as AntLayout, Typography } from 'antd';

export const Info = styled(AntLayout.Header)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background: #f0f2f5;
`;

export const Name = styled(Typography.Paragraph)`
  color: #202124;
  font-size: 1rem;
  font-weight: 700;

  &.ant-typography {
    margin-bottom: 0;
  }
`;

export const SettingsButton = styled(Dropdown.Button).attrs({
  trigger: ['click'],
  placement: 'bottomRight',
})`
  display: block;

  &.ant-btn-group,
  .ant-btn,
  .ant-btn-icon-only {
    border: none;
    background-color: initial;
    box-shadow: none;
  }
`;

export const Settings = styled.div`
  justify-self: right;
`;
