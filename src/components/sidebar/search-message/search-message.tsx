import React, { useEffect, useState } from 'react';
import { InputSider } from './styled-components';
import { IconSearchInput } from '../../icons/styled-components';
import { useUserFindMessage } from '../../../hooks/use-find-message';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setFindMessage } from '../../../redux/slices/user-dialogs-slice';
import { debounce } from 'lodash';

const SearchMessage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [request, setRequest] = useState<string>('');

  const findMessages = useUserFindMessage(request);

  useEffect(() => {
    if (request.length) {
      dispatch(setFindMessage(findMessages));
    } else {
      dispatch(setFindMessage(null));
    }
  }, [findMessages]);

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
