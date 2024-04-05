'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordSchema } from '@validations';
// import { setLoading, setVerifyToken } from '@redux';
// import { LogApp, showAppToast } from '@utils';
// import { authAPI } from '@api';
import { PATH_LOGIN } from '@routes';
import { ResetPasswordForm } from '@pages';

export const ResetPasswordModule = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(ResetPasswordSchema),
  });

  const { handleSubmit } = form;

  const handleRedirectToRegister = () => {
    navigate(PATH_LOGIN);
  };

  const handleSubmitForm = handleSubmit(async value => {
    return value;
  });

  return (
    <ResetPasswordForm
      form={form}
      onSubmitForm={handleSubmitForm}
      onRedirectToRegister={handleRedirectToRegister}
    />
  );
};
