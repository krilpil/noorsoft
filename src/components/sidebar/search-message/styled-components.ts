import styled from 'styled-components';
import { Input as AntInput } from 'antd';

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
