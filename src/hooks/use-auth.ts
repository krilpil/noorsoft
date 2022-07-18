import { useAppSelector } from './redux-hooks';

export const useAuth = (): boolean => {
  const { token } = useAppSelector((state) => state.root.user);
  return !!token;
};
