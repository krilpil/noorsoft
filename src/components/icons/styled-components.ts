import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faArrowRightFromBracket,
  faCommentDots,
  faComments,
  faCommentSlash,
  faEllipsis,
  faLock,
  faMagnifyingGlass,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';

import { faComments as faCommentsRegular } from '@fortawesome/free-regular-svg-icons';
import { faGoogle, faVk } from '@fortawesome/free-brands-svg-icons';

const formIcon = css`
  opacity: 70%;
  width: 0.7rem;
`;

/* ICONS FORM */

export const IconLock = styled(FontAwesomeIcon).attrs({
  icon: faLock,
})`
  ${formIcon}
`;

export const IconSearch = styled(FontAwesomeIcon).attrs({
  icon: faMagnifyingGlass,
})`
  ${formIcon}
`;

export const IconSearchInput = styled(FontAwesomeIcon).attrs({
  icon: faMagnifyingGlass,
})`
  width: 1.1rem;
`;

export const IconUserAstronaut = styled(FontAwesomeIcon).attrs({
  icon: faUserAstronaut,
})`
  ${formIcon}
`;

/* ICONS BRANDS */

const iconHelper = css`
  color: #ffffff;
`;

export const IconVK = styled(FontAwesomeIcon).attrs({
  icon: faVk,
})`
  ${iconHelper}
`;

export const IconGoogle = styled(FontAwesomeIcon).attrs({
  icon: faGoogle,
})`
  ${iconHelper}
`;

/* ICONS DIALOGS */

const IconDialogs = css<{ active?: boolean }>`
  width: 1.4rem;
  height: 1.4rem;
  opacity: ${(props) => (props.active ? '100%' : '50%')};
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: ${(props) => (props.active ? '100%' : '85%')};
  }
`;

export const IconStartDialog = styled(FontAwesomeIcon).attrs({
  icon: faCommentsRegular,
  size: '3x',
})``;

export const IconCheck = styled(FontAwesomeIcon).attrs({
  icon: faComments,
  size: '2x',
})`
  ${IconDialogs}
`;

export const IconSave = styled(FontAwesomeIcon).attrs({
  icon: faCommentDots,
  size: '2x',
})`
  ${IconDialogs}
`;

export const IconClose = styled(FontAwesomeIcon).attrs({
  icon: faCommentSlash,
  size: '2x',
})`
  ${IconDialogs}
`;

export const ArrowFromBracket = styled(FontAwesomeIcon).attrs({
  icon: faArrowRightFromBracket,
  size: '2x',
})`
  ${IconDialogs}
`;

export const Ellipsis = styled(FontAwesomeIcon).attrs({
  icon: faEllipsis,
  size: '2x',
})``;
