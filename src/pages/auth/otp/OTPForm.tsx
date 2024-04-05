import { BaseSyntheticEvent, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import {
  AppButton,
  AppH3,
  AppInput,
  AppText,
  AppTextBodyRegular
} from '@components';
import { BREAK_POINT } from '@config';
import { APP_COLORS } from '@themes';

interface IProps {
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined
  ) => Promise<void>;
  onRedirectToRegister: () => void;
  onResendOTP: () => void;
}

export const OTPForm = memo((props: IProps) => {
  const { form, onSubmitForm, onResendOTP } = props;

  const {
    register,
    formState: { errors }
  } = form;

  const { t } = useTranslation();

  return (
    <StyledOTPForm className="sign-up__section">
      <form
        onSubmit={onSubmitForm}
        className="signUp-form"
      >
        <AppH3 className="title">{t('enterOTP')}</AppH3>
        <AppTextBodyRegular className="body-content">
          {t('sendOTP')}
        </AppTextBodyRegular>
        <AppInput
          placeholder={String(t('enterOtp'))}
          name="otp"
          className="input"
          onlyNumber
          onChange={() => {}}
          errors={errors['otp']?.message}
          register={register}
          captionLabel={t('otp')}
          required
        />
        <div className="sub-actions">
          <AppText
            $fontSize={14}
            $fontWeight={400}
            $color={APP_COLORS.neutralColor500}
            className=" text-default"
          >
            {t('dontReceiveCode')}
          </AppText>
          <AppText
            $fontSize={14}
            $fontWeight={600}
            onClick={onResendOTP}
            $color={APP_COLORS.blue500}
            className=" text-default click-able font-blue"
          >
            {t('resendOTP')}
          </AppText>
        </div>
        <div className="actions">
          <AppButton
            typeHtml="submit"
            className="submit-register-btn"
            btnStyle="rounded"
            backgroundColor={APP_COLORS.blueNormal}
            text={t('submit')}
          />
        </div>
      </form>
    </StyledOTPForm>
  );
});

export const StyledOTPForm = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 47.2rem;

  .signUp-form {
    width: 100%;
    display: flex;
    border-radius: 16px;
    padding: 2.4rem;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    .app-input {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
  .title {
    margin-top: 2.4rem;
  }
  .body-content {
    margin-top: 2.4rem;
  }
  .app-input {
    margin-top: 2.4rem;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .submit-register-btn {
      @media (max-width: ${BREAK_POINT.mobile}) {
        height: 40px;
      }
    }
  }
  .sub-actions {
    position: relative;
    /* text-align: right; */
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
    @media (max-width: ${BREAK_POINT.mobile}) {
      margin-top: 16px;
    }
  }
`;
