import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { RegisterSchema } from '@validations';
import { showAppToast } from '@utils';
import { RegisterForm } from '@pages/auth/register';
import { authAPI } from '@api';
import { setLoading } from '@redux';

export const RegisterModule = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterSchema),
  });

  const { handleSubmit } = form;

  const handleRedirectToRegister = () => {
    navigate('/register/email');
  };

  const handleSubmitForm = handleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.register(value);
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
      <RegisterForm
        form={form}
        onSubmitForm={handleSubmitForm}
        onRedirectToRegister={handleRedirectToRegister}
      />
    </>
  );
};
