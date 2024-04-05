'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { OTPSchema } from '@validations';
import { setVerifyToken, setLoading, setVerifyMailHash } from '@redux';
import { showAppToast } from '@utils';
import { authAPI } from '@api';
import { PATH_RESET_PASSWORD, PATH_LOGIN } from '@routes';
import { selectAuth, useAppSelector } from '@redux';
import { OTPForm } from '@pages';

export const OTPModule = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { verifyMailHash } = useAppSelector(selectAuth);
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(OTPSchema)
  });

  const { handleSubmit, reset } = form;

  const handleRedirectToRegister = () => {
    navigate(PATH_LOGIN);
  };

  const handleSubmitForm = handleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.otpValid(value.otp);
      if (res.access_token) {
        dispatch(setVerifyToken(res.access_token));
        dispatch(setVerifyMailHash(''));
        navigate(PATH_RESET_PASSWORD);
        reset({ otp: '' });
      }
    } catch (error: any) {
      showAppToast(error?.response?.data?.message, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

  const handleResendOTP = async () => {
    try {
      dispatch(setLoading(true));
      await authAPI.forgotPassword(verifyMailHash);
      showAppToast(t('hintOTP'), 'success');
    } catch (error: any) {
      showAppToast(error?.response?.data?.message, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <OTPForm
      form={form}
      onSubmitForm={handleSubmitForm}
      onResendOTP={handleResendOTP}
      onRedirectToRegister={handleRedirectToRegister}
    />
    // <ResetPasswordSendEmail />
  );
};
