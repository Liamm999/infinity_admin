'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { LoginSchema } from '@validations';
import { setAccessToken, setAccountInfo, setLoading } from '@redux';
import { showAppToast } from '@utils';
import { authAPI } from '@api';
import { LoginForm } from '@pages';

export const LoginModule = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginSchema),
  });

  const { handleSubmit } = form;

  const handleRedirectToRegister = () => {
    navigate('/register/email');
  };

  const handleSubmitForm = handleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.login(value);
      console.log(res);
      // if (res.access_token) {
      // }
    } catch (error: any) {
      showAppToast(error?.response?.data?.message, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

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
