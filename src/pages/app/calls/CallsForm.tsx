import { BaseSyntheticEvent, memo } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';
// import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { AppButton, AppInput, AppText } from '@components';
import { APP_COLORS } from '@themes';

interface IProps {
  type?: string;
  form: UseFormReturn<any, any, any>;
  onSubmitForm: (
    e?: BaseSyntheticEvent<any, any, any> | undefined,
  ) => Promise<void>;
}

export const CallsForm = memo((props: IProps) => {
  const { form, type = true, onSubmitForm } = props;
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
                label="Mô tả"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callDescription"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callDescription']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Thời lượng gọi"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callDuration"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callDuration']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Bắt đầu"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callStart"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callStart']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Kết thúc"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callEnd"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callEnd']?.message}
                register={register}
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-start gap-[22px]">
            <div className="w-full">
              <AppInput
                label="Thời gian"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callDate"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callDate']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <AppInput
                label="Ghi âm"
                labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                name="callRecord"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['callRecord']?.message}
                register={register}
                required
              />
            </div>
            <div className="w-full">
              <Controller
                name="statusId"
                control={control}
                render={({ field: { onChange }, ...fields }) => (
                  <AppInput
                    label="Trạng thái"
                    labelClassName="!text-[24px] !text-gray-500 !font-light !capitalize"
                    name="statusId"
                    className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                    containerClassName="w-full"
                    onChange={(value: any) => {
                      if (value && value !== '') {
                        onChange(value);
                        return;
                      }
                      onChange(null);
                    }}
                    inputStyle={{
                      padding: '0 8px',
                    }}
                    errors={errors['statusId']?.message}
                    register={register}
                    required
                    {...fields}
                  />
                )}
              />
            </div>
            {/* <div className="w-full">
              <AppText className="!text-[24px] !text-gray-500 !font-light">
                Người gọi
              </AppText>
              <AppInput
                name="userId"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['userId']?.message}
                register={register}
                required
              />
            </div> */}
            {/* <div className="w-full">
              <AppText className="!text-[24px] !text-gray-500 !font-light">
                Mô tả
              </AppText>
              <AppInput
                name="autId"
                className="!h-[55px] w-full !px-0 items-center !rounded-none !border-black"
                containerClassName="w-full"
                onChange={() => {}}
                inputStyle={{
                  padding: '0 8px',
                }}
                errors={errors['autId']?.message}
                register={register}
                required
              />
            </div> */}
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
