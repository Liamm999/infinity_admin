import { BaseSyntheticEvent, memo, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AppButton, AppInput, AppText } from '@components';
import { APP_COLORS } from '@themes';

interface IProps {
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined,
  ) => Promise<void>;
  onRedirectToRegister: () => void;
}

export const RegisterForm = memo((props: IProps) => {
  const { form, onSubmitForm } = props;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <StyledSignUpWrapper>
      <AppText
        $fontSize={40}
        $fontWeight={400}
        className="!text-[36px] !text-black"
      >
        Đăng ký tài khoản
      </AppText>

      <form
        onSubmit={onSubmitForm}
        className="flex flex-col justify-center gap-[18px] w-full mt-10"
      >
        <div className="w-full">
          <AppText className="!text-[26px] !text-black !font-[400]">
            Tên người dùng
          </AppText>
          <AppInput
            name="username"
            className="!h-[48px] w-full !px-0 items-center !rounded-none !border-black"
            containerClassName="w-full"
            onChange={() => {}}
            inputStyle={{
              padding: '0 8px',
            }}
            errors={errors['username']?.message}
            register={register}
            required
          />
        </div>
        <div className="w-full">
          <AppText className="!text-[26px] !text-black !font-[400]">
            Email
          </AppText>
          <AppInput
            name="email"
            type="email"
            className="!h-[48px] w-full !px-0 items-center !rounded-none !border-black"
            containerClassName="w-full"
            onChange={() => {}}
            inputStyle={{
              padding: '0 8px',
            }}
            errors={errors['email']?.message}
            register={register}
            required
          />
        </div>
        <div className="w-full">
          <AppText className="!text-[26px] !text-black !font-[400]">
            Mật khẩu
          </AppText>
          <AppInput
            name="password"
            type="password"
            className="!h-[48px] w-full !px-0 items-center !rounded-none !border-black"
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
          <AppText className="!text-[26px] !text-black !font-[400]">
            Xác nhận mật khẩu
          </AppText>
          <AppInput
            name="confirmPassword"
            type="password"
            className="!h-[48px] w-full !px-0 items-center !rounded-none !border-black"
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
        <div className="w-full flex justify-center  mt-[30px]">
          <AppButton
            typeHtml="submit"
            className={`px-[40px] !w-max !h-[80px] !rounded-[30px]`}
            textClassName="!text-black !font-light !text-[36px]"
            backgroundColor={APP_COLORS.primaryGolden}
            text={'Tạo tài khoản'}
          />
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
