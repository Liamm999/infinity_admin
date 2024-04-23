import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import { selectAuth, useAppSelector } from '@redux';
import { PATH_LOGIN } from '@routes';

export const AuthRoute = () => {
  const { user } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  if (user && user.userId > 0) navigate('/calls');

  return user && user.userId > 0 ? <Navigate to={PATH_LOGIN} /> : <Outlet />;
};
