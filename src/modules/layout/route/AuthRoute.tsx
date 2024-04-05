import { Navigate, Outlet } from 'react-router-dom';

import { selectAuth, useAppSelector } from '@redux';
import { PATH_LOGIN } from '@routes';

export const AuthRoute = () => {
  const { accessToken } = useAppSelector(selectAuth);

  return accessToken ? <Navigate to={PATH_LOGIN} /> : <Outlet />;
};
