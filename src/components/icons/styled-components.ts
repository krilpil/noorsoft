import styled, {css} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faLock, faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import {faVk, faGoogle} from "@fortawesome/free-brands-svg-icons";

const formIcon = css`
  opacity: 70%;
  width: 0.7rem;
`

const iconHelper = css`
  color: #ffffff;
`

export const IconLock = styled(FontAwesomeIcon).attrs({
    icon: faLock
})`
  ${formIcon}
`

export const IconUserAstronaut = styled(FontAwesomeIcon).attrs({
    icon: faUserAstronaut
})`
  ${formIcon}
`

export const IconVK = styled(FontAwesomeIcon).attrs({
    icon: faVk
})`
  ${iconHelper}
`

export const IconGoogle = styled(FontAwesomeIcon).attrs({
    icon: faGoogle
})`
  ${iconHelper}
`