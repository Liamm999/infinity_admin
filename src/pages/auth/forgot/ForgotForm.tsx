import { BaseSyntheticEvent, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';
// import {  useNavigate } from 'react-router-dom';
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

export const ForgotForm = memo((props: IProps) => {
  const { form, onSubmitForm } = props;
  // const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <StyledSignUpWrapper>
      <AppText
        $fontSize={40}
        $fontWeight={400}
        className="!text-[40px] !text-black"
      >
        Quên mật khẩu
      </AppText>

      <AppText
        $fontWeight={400}
        className="!text-[32px] !text-black !mt-8"
      >
        Điền địa chỉ email đã đăng ký của bạn tại đây để cấp lại mật khẩu
      </AppText>

      <form
        onSubmit={onSubmitForm}
        className="flex flex-col justify-center gap-[22px] w-full mt-10"
      >
        <div className="w-full">
          <AppText className="!text-[32px] !text-gray-500 !font-light">
            Email
          </AppText>
          <AppInput
            name="email"
            className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
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
        <div className="w-full flex justify-center mt-[30px]">
          <AppButton
            typeHtml="submit"
            className={`max-w-[277px] !h-[80px] !rounded-[30px]`}
            textClassName="!text-black !font-light !text-[36px]"
            backgroundColor={APP_COLORS.primaryGolden}
            text={'Tiếp tục'}
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
