import { UserDialogFetchType, UserDialogType } from '../../types/user-message-type';

export const getUserDialogs = (fetchUserDialogs: UserDialogFetchType): UserDialogType[] => {
  const dialogs: UserDialogType[] = [];

  Object.entries(fetchUserDialogs).forEach((dialog) => {
    dialogs.push({
      uid: dialog[0],
      name: dialog[1].name,
      surname: dialog[1].surname,
      status: dialog[1].status,
      avatar: dialog[1].avatar,
      messages: Object.values(dialog[1].messages),
    });
  });

  return dialogs;
};
