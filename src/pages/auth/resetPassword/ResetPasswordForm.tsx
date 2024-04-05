import { BaseSyntheticEvent, memo, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AppButton, AppInput, AppText } from '@components';
import { APP_COLORS } from '@themes';
import { ResetPasswordIcon } from '@assets';

interface IProps {
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined,
  ) => Promise<void>;
  onRedirectToRegister: () => void;
}

export const ResetPasswordForm = memo((props: IProps) => {
  const { form, onSubmitForm } = props;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <StyledSignUpWrapper>
      <ResetPasswordIcon className="absolute -top-[160px]" />
      <AppText
        $fontSize={40}
        $fontWeight={400}
        className="!text-[40px] !text-black !mt-24"
      >
        Đặt lại mặt khẩu
      </AppText>

      <form
        onSubmit={onSubmitForm}
        className="flex flex-col justify-center gap-[22px] w-full mt-10"
      >
        <div className="w-full">
          <AppText className="!text-[32px] !text-gray-500 !font-light">
            Mật khẩu mới
          </AppText>
          <AppInput
            name="password"
            className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
            containerClassName="w-full"
            onChange={() => {}}
            inputStyle={{
              padding: '0 8px',
            }}
            errors={errors['password']?.message}
            register={register}
            required
          />
        </div>
        <div className="w-full">
          <AppText className="!text-[32px] !text-gray-500 !font-light">
            Nhập lại mật khẩu mới
          </AppText>
          <AppInput
            name="confirmPassword"
            className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
            containerClassName="w-full"
            onChange={() => {}}
            inputStyle={{
              padding: '0 8px',
            }}
            errors={errors['confirmPassword']?.message}
            register={register}
            required
          />
        </div>
        <div className="flex items-center gap-[60px]">
          <div className="w-full flex justify-center mt-[30px]">
            <AppButton
              className={`max-w-[277px] !h-[64px] !rounded-[30px]`}
              textClassName="!text-black !font-light !text-[36px]"
              backgroundColor={APP_COLORS.primaryGolden}
              text={'Hủy bỏ'}
            />
          </div>
          <div className="w-full flex justify-center mt-[30px]">
            <AppButton
              typeHtml="submit"
              className={`max-w-[277px] !h-[64px] !rounded-[30px]`}
              textClassName="!text-black !font-light !text-[36px]"
              backgroundColor={APP_COLORS.primaryGolden}
              text={'Lưu'}
            />
          </div>
        </div>
      </form>
    </StyledSignUpWrapper>
  );
});

export const StyledSignUpWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 50px 80px;
  width: 50%;
  background-color: #fff;
`;
