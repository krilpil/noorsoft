import { StatusDialogType } from '../types/user-message-type';

export type itemsMenuChatType = {
  key: StatusDialogType;
  label: string;
  danger?: boolean;
};

export const itemsMenuChat: itemsMenuChatType[] = [
  {
    key: 'active',
    label: 'Add to active',
  },
  {
    key: 'saved',
    label: 'Add to saved',
  },
  {
    key: 'closed',
    label: 'Close the question',
    danger: true,
  },
];
