import { BaseSyntheticEvent, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  AppButton,
  AppInput,
  AppText,
} from '@components';
import { APP_COLORS } from '@themes';
import { IMAGES, Logo } from '@assets';

interface IProps {
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined,
  ) => Promise<void>;
  onRedirectToRegister: () => void;
}

export const LoginForm = memo((props: IProps) => {
  const { form, onSubmitForm } = props;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <StyledSignInWrapper>
      <FormContainer>
        <Logo className="min-w-[20%] min-h-[20%]" />
        <AppText
          $fontSize={40}
          $fontWeight={400}
          className="!text-[32px]"
        >
          Đăng nhập tài khoản của bạn
        </AppText>
        <img
          src={IMAGES.CRMImage}
          alt="CRM"
          className="h-[14%]"
        />

        <form
          onSubmit={onSubmitForm}
          className="w-full"
        >
          <AppInput
            placeholder="Tên người dùng"
            name="username"
            className="!h-[72px] w-full !px-0 items-center"
            containerClassName="w-full "
            onChange={() => {}}
            inputStyle={{
              backgroundColor: APP_COLORS.primaryGray,
              padding: '0 46px',
            }}
            errors={errors['username']?.message}
            register={register}
            required
          />
          <AppInput
            placeholder="Mật Khẩu"
            name="password"
            className="!h-[72px] w-full !px-0 items-center"
            containerClassName="w-full mt-[18px]"
            onChange={() => {}}
            inputStyle={{
              backgroundColor: APP_COLORS.primaryGray,
              padding: '0 46px',
            }}
            errors={errors['password']?.message}
            register={register}
            required
          />

          <div className="w-full flex justify-end">
            <AppButton
              className={`max-w-[217px] mt-[20px]`}
              textClassName="!text-black !font-light !text-[16px]"
              btnStyle="rounded"
              backgroundColor={APP_COLORS.primaryGray}
              onClick={() => navigate('/forgot')}
              text={'Quên mật khẩu'}
            />
          </div>
          <div className="w-full flex justify-center">
            <AppButton
              typeHtml="submit"
              className={`px-[40px] !w-max !h-[72px] mt-[50px] !rounded-[30px]`}
              textClassName="!text-black !font-light !text-[36px]"
              backgroundColor={APP_COLORS.primaryGolden}
              text={'Đăng nhập'}
            />
          </div>
        </form>
      </FormContainer>
      <RedirectContainer>
        <AppText
          $fontSize={40}
          $fontWeight={400}
          $color={APP_COLORS.secondaryGolden}
        >
          Lần đầu đăng nhập?
        </AppText>
        <AppText
          $fontSize={32}
          $fontWeight={400}
          className="my-4"
          $color={APP_COLORS.secondaryGolden}
        >
          Tạo tài khoản và nâng cấp tiến trình làm việc của bạn ngay
        </AppText>
        <div className="w-full flex justify-center">
          <AppButton
            className={`px-[40px] !w-max !h-[80px] mt-[50px] !rounded-[30px]`}
            textClassName="!text-black !font-light !text-[36px]"
            backgroundColor={APP_COLORS.primaryGolden}
            onClick={() => navigate('/register')}
            text={'Đăng ký'}
          />
        </div>
      </RedirectContainer>
    </StyledSignInWrapper>
  );
});

export const StyledSignInWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 480px) {
    padding: 0 5%;
  }
`;

const FormContainer = styled.div`
  background: #fff;
  min-width: 65%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 5% 10%;

  input,
  input::-webkit-input-placeholder {
    font-size: 32px !important;
  }

  input::placeholder {
    font-size: 32px !important;
  }
`;

const RedirectContainer = styled.div`
  max-width: 45%;
  padding: 0 5%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
