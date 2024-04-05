import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth, useAppSelector } from '@redux';
import { PATH_LOGIN } from '@routes';

export const AppRoute = () => {
  const { accessToken } = useAppSelector(selectAuth);

  return accessToken ? <Outlet /> : <Navigate to={PATH_LOGIN} />;
};
