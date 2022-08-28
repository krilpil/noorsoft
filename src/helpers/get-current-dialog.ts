import { UserDialogType } from '../types/user-message-type';

type args = {
  dialogs: UserDialogType[];
  openDialogUid: string;
};

export const getCurrentDialog = ({ dialogs, openDialogUid }: args): UserDialogType => {
  return dialogs.reduce((accum, dialog) => {
    if (dialog.uid === openDialogUid) {
      accum = dialog;
    }
    return accum;
  });
};
