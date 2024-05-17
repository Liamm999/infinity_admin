'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordSchema, OTPSchema } from '@validations';
import { showAppToast } from '@utils';
import { ForgotForm, OTPForm } from '@pages';
import { setLoading } from '@redux';
import { authAPI } from '@api';
import { useState } from 'react';

export const ForgotModule = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const otpForm = useForm({
    mode: 'onChange',
    resolver: yupResolver(OTPSchema),
  });

  const { handleSubmit } = form;

  const { handleSubmit: otpHandleSubmit } = otpForm;

  const handleRedirectToRegister = () => {
    navigate('/register/email');
  };

  const handleSubmitForm = handleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.forgotPassword(value.email);
      if (res) {
        showAppToast(res, 'success');
        setStep(2);
      }
    } catch (error: any) {
      showAppToast(error?.response?.data, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

  const handleOtpSubmit = otpHandleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      // const res: any = await authAPI.forgotPassword(value.email);
      // if (res) {
      //   showAppToast(res, 'success');
      // navigate('/login');
      // }
    } catch (error: any) {
      showAppToast(error?.response?.data, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

  return (
    <>
      {step === 1 && (
        <ForgotForm
          form={form}
          onSubmitForm={handleSubmitForm}
          onRedirectToRegister={handleRedirectToRegister}
        />
      )}

      {step === 2 && (
        <OTPForm
          form={otpForm}
          onSubmitForm={handleOtpSubmit}
          onRedirectToRegister={handleRedirectToRegister}
        />
      )}
    </>
  );
};
