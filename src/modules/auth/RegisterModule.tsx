import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { RegisterSchema } from '@validations';
import { showAppToast } from '@utils';
import { RegisterForm } from '@pages/auth/register';

export const RegisterModule = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const { handleSubmit, reset } = form;

  const handleRedirectToRegister = () => {
    navigate('/register/email');
  };

  const handleSubmitForm = handleSubmit(async value => {});

  return (
    <>
      <RegisterForm
        form={form}
        onSubmitForm={handleSubmitForm}
        onRedirectToRegister={handleRedirectToRegister}
      />
    </>
  );
};
