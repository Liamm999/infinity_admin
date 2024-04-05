import { memo, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { APP_COLORS } from '@/themes';
import { useTranslation } from 'react-i18next';
import { BREAK_POINT } from '@config';

interface IProps {
  type?: 'week' | 'month' | 'quarter' | 'year';
  defaultValue?: any;
  label?: string;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  maxDate?: any;
  minDate?: any;
  disabled?: boolean;
  status?: 'error' | 'warning';
  popupClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  allowClear?: boolean;
  bordered?: boolean;
  open?: boolean;
  nextIcon?: ReactNode;
  prevIcon?: ReactNode;
  suffixIcon?: ReactNode;
  inputReadOnly?: boolean;
  placeholder?: string;
  required?: boolean;
  noBorderStyle?: boolean;
  value?: any;
  name?: string;
  rows?: number;
  cols?: number;
  key?: any;
  register?: any;
  onChange?: (e: any) => void;
}

export const AppTextareaInput = memo((props: IProps) => {
  //page props
  const {
    value,
    label,
    errors,
    defaultValue,
    containerClassName,
    inputClassName,
    key,
    name,
    inputReadOnly = false,
    placeholder,
    required,
    noBorderStyle,
    rows,
    cols,
    register,
    onChange
  } = props;
  const { t } = useTranslation();

  return (
    <Wrapper
      className={containerClassName}
      $noBorderStyle={noBorderStyle}
    >
      {label && (
        <label
          className="input__label"
          htmlFor={label}
        >
          {label}
          {required && <span className="required"> *</span>}:
        </label>
      )}
      <textarea
        className={
          inputClassName ? `app-area-input ${inputClassName}` : 'app-area-input'
        }
        style={
          !errors
            ? { border: `1px solid ${APP_COLORS.creamDark}` }
            : { border: `1px solid ${APP_COLORS.red}` }
        }
        readOnly={inputReadOnly}
        placeholder={placeholder}
        id={name}
        key={key}
        name={name}
        rows={rows}
        cols={cols}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        ref={register(name)}
        {...(register && name && register(name))}
      />
      {!!errors && <p className="input-text-error">{t(String(errors))}</p>}
    </Wrapper>
  );
});

const Wrapper = styled.div<{
  $noBorderStyle?: boolean;
}>`
  height: auto;
  .input__label {
    display: inline-block;
    margin-bottom: 0.8rem;
    color: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 20px;
    text-align: center;
    color: #303030;
    .required {
      color: #d42a1c;
      font-weight: bold;
    }
    ${p =>
      p?.$noBorderStyle &&
      css`
        color: #303030;
        font-weight: 500;
        font-size: 1.5rem;
      `}
  }
  .input-text-error {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: red;
    font-size: 1.2rem;
    position: relative;

    /* top: -0.2rem; */
    @media (max-width: ${BREAK_POINT.mobile}) {
      font-size: 1.1rem;
    }
  }
  .app-area-input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    //border: 1px solid ${APP_COLORS.creamDark};
    border-radius: 10px;
    color: ${APP_COLORS.fontDark};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding: 10px;
    background: ${APP_COLORS.white};
    &:focus {
      outline: none !important;
    }
    &::placeholder {
      color: ${APP_COLORS.fontLight};
    }
    ${p =>
      p?.$noBorderStyle &&
      css`
        border: none;
        background: #f9f9f9 !important;
        font-size: 1.4rem;
        font-weight: 500;
        outline: none;
      `}
  }
`;
