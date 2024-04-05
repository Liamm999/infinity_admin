'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordSchema } from '@validations';
// import { LogApp, showAppToast } from '@utils';
import { ForgotForm } from '@pages';

export const ForgotModule = () => {
  // const dispatch = useAppDispatch();
  // const { t } = useTranslation();
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
    return value;
  });

  return (
    <ForgotForm
      form={form}
      onSubmitForm={handleSubmitForm}
      onRedirectToRegister={handleRedirectToRegister}
    />
  );
};
