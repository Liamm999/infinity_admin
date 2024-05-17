import { BaseSyntheticEvent, memo } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
// import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AppButton, AppInput, AppText } from '@components';
import { APP_COLORS } from '@themes';
import { useHeaderButton } from '@hooks';

interface IProps {
  type?: string;
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined,
  ) => Promise<void>;
}

export const CustomersForm = memo((props: IProps) => {
  const { form, type = true, onSubmitForm } = props;
  const { type: formType } = useHeaderButton();

  // const navigate = useNavigate();

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
                label="Số điện thoại"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="phoneNumber"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['phoneNumber']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Tên khách hàng"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="cusName"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['cusName']?.message}
                register={register}
                required
              />
            </div>
            {formType === 'create' && (
              <div className="w-full">
                <AppInput
                  label="Id Khách hàng"
                  labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                  name="cusId"
                  className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                  containerClassName="w-full"
                  onChange={() => {}}
                  inputStyle={{
                    padding: '0 8px',
                  }}
                  errors={errors['cusId']?.message}
                  register={register}
                  required
                />
              </div>
            )}

            <div className="w-full">
              <AppInput
                label="Id cuộc gọi"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callId"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callId']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Trạng thái"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="staId"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['staId']?.message}
                register={register}
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-start gap-[22px]">
            <div className="w-full">
              <AppInput
                label="Kiểu dữ liệu"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="datatype"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['datatype']?.message}
                register={register}
                required
              />
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-[30px]">
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
`;
