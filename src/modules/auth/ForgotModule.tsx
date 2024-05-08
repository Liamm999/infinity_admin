'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordSchema } from '@validations';
import { showAppToast } from '@utils';
import { ForgotForm } from '@pages';
import { setLoading } from '@redux';
import { authAPI } from '@api';

export const ForgotModule = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const { handleSubmit } = form;

  const handleRedirectToRegister = () => {
    navigate('/register/email');
  };

  const handleSubmitForm = handleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.forgotPassword(value.email);
      if (res) {
        showAppToast(res, 'success');
      }
    } catch (error: any) {
      showAppToast(error?.response?.data, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

  return (
    <ForgotForm
      form={form}
      onSubmitForm={handleSubmitForm}
      onRedirectToRegister={handleRedirectToRegister}
    />
  );
};
