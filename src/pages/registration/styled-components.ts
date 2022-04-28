import styled from "styled-components";
import {Button} from "antd";

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