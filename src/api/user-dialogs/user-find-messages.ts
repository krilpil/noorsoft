import { StatusDialogType, UserSideMessageType } from '../../types/user-message-type';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../config/firebase';
import { FindMessagesType } from '../../types/sagas-type';

const queryQuestions = (status: StatusDialogType) => {
  return query(collection(firestoreDb, 'questions'), where('status', '==', status));
};

const queryMessages = (request: string, questionId: string) => {
  return query(
    collection(firestoreDb, 'questions', questionId, 'messages'),
    where('content', '==', request)
  );
};

export const getFindMessages = ({
  request,
  status,
}: FindMessagesType): Promise<UserSideMessageType[]> => {
  return new Promise<UserSideMessageType[]>((resolve) => {
    const sideMessages: UserSideMessageType[] = [];
    getDocs(queryQuestions(status)).then((responseQuestions) => {
      responseQuestions.docs.forEach(async (question, index) => {
        const responseMessages = await getDocs(queryMessages(request, question.id));
        responseMessages.docs.forEach((message) => {
          sideMessages.push({
            userId: question.id,
            status: status,
            lastMessage: message.data().content,
            unread: 0,
          });
        });

        if (index + 1 === responseQuestions.size) {
          resolve(sideMessages);
        }
      });
    });
  });
};
