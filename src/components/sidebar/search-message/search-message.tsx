import React, { useEffect, useState } from 'react';
import { InputSider } from './styled-components';
import { IconSearchInput } from '../../icons/styled-components';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import {
  fetchFindDialogMessage,
  fetchSideDialogsStatus,
} from '../../../redux/slices/side-dialogs-slice';
import { debounce } from 'lodash';

const SearchMessage: React.FC = () => {
  const dispatch = useAppDispatch();
  const messagesStatus = useAppSelector((state) => state.sideDialogs.status);
  const [request, setRequest] = useState<string>('');

  useEffect(() => {
    if (request.length) {
      dispatch(fetchFindDialogMessage({ request, status: messagesStatus }));
    } else {
      dispatch(fetchSideDialogsStatus(messagesStatus));
    }
  }, [request]);

  const inputHandlerChange = debounce((request: string) => setRequest(request), 750);

  return (
    <InputSider
      onChange={(e) => inputHandlerChange(e.target.value)}
      placeholder={'Search here...'}
      prefix={<IconSearchInput />}
    />
  );
};

export default React.memo(SearchMessage);
