import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth, useAppSelector } from '@redux';
import { PATH_LOGIN } from '@routes';

export const AppRoute = () => {
  const { user } = useAppSelector(selectAuth);

  return user && user.userId > 0 ? <Outlet /> : <Navigate to={PATH_LOGIN} />;
};
