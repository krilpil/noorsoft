import React from 'react';
import { StatusDialogType } from '../../../types/user-message-type';
import { IconDialogs } from '../../icons/styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { fetchSideDialogsStatus } from '../../../redux/slices/side-dialogs-slice';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

type props = {
  status: StatusDialogType;
  icon: IconDefinition;
  description: string;
};

const ButtonDialog: React.FC<props> = ({ status, icon, description }) => {
  const dispatch = useAppDispatch();
  const messagesStatus = useAppSelector((state) => state.sideDialogs.status);

  return (
    <IconDialogs
      icon={icon}
      title={description}
      active={messagesStatus === status}
      onClick={() => dispatch(fetchSideDialogsStatus(status))}
    />
  );
};

export default ButtonDialog;
