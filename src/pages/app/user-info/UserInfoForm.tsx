import { BaseSyntheticEvent, memo } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
// import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AppButton, AppInput, AppSelect, AppText } from '@components';
import { APP_COLORS } from '@themes';
import { useHeaderButton } from '@hooks';
import { authorityOptions, statusOptions } from '@modules';

interface IProps {
  type?: string;
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined,
  ) => Promise<void>;
}

export const UserInfoForm = memo((props: IProps) => {
  const { form, type = true, onSubmitForm } = props;
  const { type: formType } = useHeaderButton();

  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <StyledSignUpWrapper>
      <form
        onSubmit={onSubmitForm}
        className="w-full mt-10"
      >
        <div className="flex justify-between gap-6 ">
          <div className="flex flex-col justify-center gap-[22px]">
            <div className="w-full">
              <AppInput
                label="Username"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="userName"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['userName']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Mật khẩu"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
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
              <AppInput
                label="Họ và tên"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="fullName"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['fullName']?.message}
                register={register}
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col justify-start gap-[22px]">
            <div className="w-full">
              <AppInput
                label="Email"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
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
            <div className="w-full">
              <Controller
                name="status"
                control={control}
                render={({ field: { onChange, value }, ...fileds }) => (
                  <AppSelect
                    label="Trạng thái"
                    value={value}
                    options={statusOptions}
                    onChange={onChange}
                    error={errors['status']?.message as string}
                    required
                    {...fileds}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <Controller
                name="authority"
                control={control}
                render={({ field: { onChange, value }, ...fileds }) => (
                  <AppSelect
                    label="Vai trò"
                    value={value}
                    options={authorityOptions}
                    onChange={onChange}
                    error={errors['authority']?.message as string}
                    required
                    {...fileds}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pt-[30px] mt-[30px]">
          <AppButton
            typeHtml="submit"
            className={`max-w-[277px] !h-[80px] !rounded-[30px]`}
            textClassName="!text-black !font-light !text-[36px]"
            backgroundColor={APP_COLORS.primaryGolden}
            text={type === 'create' ? 'Tạo mới' : 'Chỉnh sửa'}
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
  padding: 12px 36px;
  width: 100%;
  background-color: #fff;

  .app-input {
    min-width: 24vw;
  }

  .ant-select {
    height: 100% !important;
  }

  .ant-select-selector {
    border: 1px solid #000 !important;
    height: 55px !important;
    width: 100%;
  }

  .input__cap-label {
    font-size: 24px !important;
  }
`;
