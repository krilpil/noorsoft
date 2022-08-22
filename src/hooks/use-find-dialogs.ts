import { UserDialogType, UserMessageType } from '../types/user-message-type';

export const userFindDialog = (
  dialogs: UserDialogType[],
  uid: string | null
): UserMessageType[] => {
  let dialogMessages: UserMessageType[] = [];

  dialogs.forEach((dialog) => {
    if (dialog.uid === uid) {
      dialogMessages = dialog.messages;
    }
  });
  return dialogMessages;
};
