'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';
import {
  ForgotPasswordSchema,
  OTPSchema,
  ResetPasswordSchema,
} from '@validations';
import { showAppToast } from '@utils';
import { ForgotForm, ResetPasswordForm } from '@pages';
import { setLoading } from '@redux';
import { authAPI } from '@api';
import { useState } from 'react';
import { OTPConfirmForm } from '@pages/auth/forgot/ConfirmEmailForm';
import { IResponse } from '@interfaces/app.type';

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

  const resetForm = useForm({
    mode: 'onChange',
    resolver: yupResolver(ResetPasswordSchema),
  });

  const { handleSubmit } = form;

  const { handleSubmit: otpHandleSubmit } = otpForm;

  const { handleSubmit: resetHandleSubmit } = resetForm;

  const handleRedirectToLogin = () => {
    navigate('/login');
  };

  const handleSubmitForm = handleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.forgotPassword(value.email);
      if (res.success) {
        showAppToast(res.message, 'success');
        setStep(2);
      }
    } catch (error: any) {
      showAppToast(error?.response?.message, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

  const handleOtpSubmit = otpHandleSubmit(async value => {
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.otpValid(value.otp, value.email);
      if (res.success) {
        showAppToast(res.message, 'success');
        setStep(3);
      }
    } catch (error: any) {
      showAppToast(error?.response?.data, 'error');
    } finally {
      dispatch(setLoading(false));
    }
  });

  const handleResetSubmit = resetHandleSubmit(async value => {
    const body = {
      code: value.otp,
      email: value.email,
      newPassword: value.newPassword,
    };
    try {
      dispatch(setLoading(true));
      const res: any = await authAPI.resetPassword(body);
      if (res.success) {
        showAppToast(res.message, 'success');
        handleRedirectToLogin();
      }
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
          onCancle={handleRedirectToLogin}
        />
      )}

      {step === 2 && (
        <OTPConfirmForm
          form={otpForm}
          onSubmitForm={handleOtpSubmit}
          onCancle={handleRedirectToLogin}
        />
      )}

      {step === 3 && (
        <ResetPasswordForm
          form={resetForm}
          onSubmitForm={handleResetSubmit}
          onCancle={handleRedirectToLogin}
        />
      )}
    </>
  );
};
