'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from '@validations';
import { setAccessToken, setAccountInfo, setLoading } from '@redux';
import { showAppToast } from '@utils';
import { authAPI } from '@api';
import { LoginForm } from '@pages';

export const LoginModule = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const { handleSubmit, reset } = form;

  const handleRedirectToRegister = () => {
    navigate('/register/email');
  };

  const handleSubmitForm = handleSubmit(async value => {});

  return (
    <>
      <LoginForm
        form={form}
        onSubmitForm={handleSubmitForm}
        onRedirectToRegister={handleRedirectToRegister}
      />
    </>
  );
};
