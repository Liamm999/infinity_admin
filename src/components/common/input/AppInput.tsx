import React, { CSSProperties, ReactNode, forwardRef, useState } from 'react';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import { IHandleBlur, IHandleChange } from '@interfaces';
import { EyeCloseIcon, EyeIcon } from '@components';
import { isNum, isSpecialCharacter } from '@utils';
import { APP_COLORS, opacityHex } from '@themes';
import { BREAK_POINT } from '@config';

const preventCopyPaste = (e: any) => {
  e.preventDefault();
  // alert("Copying not allowed!")
};

interface IInputProps {
  inputType?: 'default' | 'primary' | 'search';
  sizeSearch?: 'small';
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  step?: number;
  name?: string;
  label?: string | null;
  captionLabel?: string | null;
  errors?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  className?: string;
  placeholder?: string;
  placeholderColor?: string;
  containerClassName?: string;
  value?: string | number;
  defaultValue?: string | number;
  touched?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: 'off' | 'on';
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  inputDefaultStyle?: 'preTab' | 'postTab';
  containerRef?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>;
  onClick?: () => void;
  onSearch?: () => void;
  onBlur?: IHandleBlur;
  onChange?: IHandleChange | any;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  register?: UseFormRegister<any>;
  prefix?: ReactNode;
  suffix?: ReactNode;
  prevIcon?: JSX.Element | JSX.Element[];
  sufIcon?: JSX.Element | JSX.Element[];
  maxLength?: number;
  min?: number;
  max?: number;
  haveShowPassIcon?: boolean;
  noBorderStyle?: boolean;
  haveErrorPosition?: boolean;
  inputKey?: any;
  disableCopyPaste?: boolean;
  onlyNumber?: boolean | { allowDecimal: boolean };
  onlyWord?: boolean;
}
export const AppInput = forwardRef(
  (props: IInputProps, ref?: React.Ref<HTMLInputElement>) => {
    const {
      inputType,
      sizeSearch,
      type,
      name,
      captionLabel,
      label,
      errors,
      className,
      placeholder,
      placeholderColor,
      containerClassName,
      value,
      defaultValue,
      disabled,
      readOnly,
      required,
      autoFocus,
      autoComplete,
      style,
      inputStyle,
      containerRef,
      register,
      onBlur,
      onPressEnter,
      onChange,
      prefix,
      suffix,
      prevIcon,
      sufIcon,
      inputDefaultStyle,
      maxLength,
      min,
      max,
      step,
      haveShowPassIcon,
      noBorderStyle,
      haveErrorPosition,
      inputKey,
      disableCopyPaste,
      onlyNumber,
      onlyWord,
    } = props;

    const { t } = useTranslation();

    const checkInputPattern = (e: any) => {
      if (onlyNumber) {
        const checkIfNum =
          isNum(e.key) ||
          e.key === ' ' ||
          e.key === 'Spacebar' ||
          e.key === 'Backspace' ||
          e.key === 'Delete' ||
          e.key === 'ArrowLeft' || // key code 38, 39
          e.key === 'ArrowRight' ||
          e.ctrlKey ||
          e.metaKey;
        typeof onlyNumber !== 'boolean' &&
          onlyNumber.allowDecimal &&
          e.key !== '.';
        return !checkIfNum && e.preventDefault();
      }
      if (onlyWord) {
        const checkIfWord =
          (!isNum(e.key) && !isSpecialCharacter(e.key)) ||
          e.key === ' ' ||
          e.key === 'Spacebar' ||
          e.key === 'Backspace' ||
          e.key === 'Delete' ||
          e.key === 'ArrowLeft' || // key code 38, 39
          e.key === 'ArrowRight' ||
          e.ctrlKey ||
          e.metaKey;
        return !checkIfWord && e.preventDefault();
      }
    };

    const handleOnKeyDown = (e: any) => {
      onPressEnter && onPressEnter(e);
      checkInputPattern(e);
    };

    const handlePaste = (e: any) => {
      // checkInputPattern(e)
      if (e.type === 'paste' || e.type === 'drop') {
        const textContent = (
          e.type === 'paste' ? e.clipboardData : e.dataTransfer
        ).getData('text');
        return !isNaN(textContent) && textContent.indexOf('.') === -1;
      } else if (e.type === 'keydown') {
        if (e.ctrlKey || e.metaKey) {
          return true;
        }
        const keysToAllow = [8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 32];
        return keysToAllow.indexOf(e.keyCode) > -1;
      } else {
        return true;
      }
    };

    const handleOnChange = (e: React.ChangeEvent<any>) => {
      onChange && onChange(e);
    };

    const [isShowSecureText, setIsShowSecureText] = useState<boolean>(false);
    return (
      <StyledAppInput
        className={
          containerClassName ? `${containerClassName} app-input` : 'app-input'
        }
        style={style}
        ref={containerRef}
        placeholderColor={placeholderColor}
        inputType={inputType}
        sizeSearch={sizeSearch}
        $inputDefaultStyle={inputDefaultStyle}
        $haveRightIcon={haveShowPassIcon || !!sufIcon}
        $noBorderStyle={noBorderStyle}
        $error={!!errors}
        $disabled={disabled}
      >
        {label && (
          <label
            className="input__label"
            htmlFor={name || label}
          >
            {t(label)}
            {required && <span className="required"> *</span>}
          </label>
        )}
        {captionLabel && (
          <label
            className="input__cap-label"
            htmlFor={name || captionLabel}
          >
            {t(captionLabel)}
            {required && <span className="required"> *</span>}
          </label>
        )}
        <div
          className={className ? `inner-input h-3 ${className}` : 'inner-input'}
        >
          {!!prefix && <span className="prefix">{prefix}</span>}
          {!!prevIcon && <div className="prev-icon">{prevIcon}</div>}
          <input
            className="r-input"
            ref={ref}
            id={inputKey || name}
            name={name}
            value={value}
            type={isShowSecureText ? 'text' : type}
            autoComplete={autoComplete}
            placeholder={String(t(placeholder || ''))}
            disabled={disabled}
            readOnly={readOnly}
            defaultValue={defaultValue}
            style={{ ...inputStyle }}
            autoFocus={autoFocus}
            onChange={handleOnChange}
            onBlur={onBlur}
            onKeyDown={handleOnKeyDown}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}
            onPaste={handlePaste}
            {...(onlyNumber && { inputmode: 'numeric', step: 'any' })}
            // {...(onlyNumber && { pattern: '[0-9]*' })}
            {...(disableCopyPaste && {
              onCut: e => preventCopyPaste(e),
              onCopy: e => preventCopyPaste(e),
              onPaste: e => preventCopyPaste(e),
            })}
            {...(register && name && register(name))}
          />
          {!!suffix && <span className="suffix">{suffix}</span>}
          {!!sufIcon && <div className="suf-icon"> {sufIcon}</div>}
          {type === 'password' && haveShowPassIcon && (
            <div
              className="suf-icon sh-pass"
              onClick={() => {
                setIsShowSecureText(prv => !prv);
              }}
            >
              {isShowSecureText ? (
                <EyeCloseIcon size={18} />
              ) : (
                <EyeIcon size={18} />
              )}
            </div>
          )}
        </div>
        {haveErrorPosition ? (
          <p className="input-text-error">{t(String(errors)) || ' '}</p>
        ) : (
          !!errors && <p className="input-text-error">{t(String(errors))}</p>
        )}
      </StyledAppInput>
    );
  },
);

export const StyledAppInput = styled.div<{
  placeholderColor?: string;
  inputType?: string;
  sizeSearch?: string;
  $inputDefaultStyle?: 'preTab' | 'postTab';
  $haveRightIcon?: boolean;
  $noBorderStyle?: boolean;
  $error?: boolean;
  $disabled?: boolean;
}>`
  width: 100%;
  label {
    display: inline-block;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.neutral800};
    font-family: 'Hammersmith One', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    .required {
      color: #d42a1c;
      font-weight: bold;
    }
  }
  .input__label {
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  .input__cap-label {
    font-size: 1.6rem;
    font-weight: 500;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  ${p =>
    p.$inputDefaultStyle === 'preTab' &&
    css`
      .inner-input {
        padding-left: 0 !important;
      }
      .r-input {
        padding-left: 10px !important;
      }
    `}

  ${p =>
    p.$inputDefaultStyle === 'postTab' &&
    css`
      .inner-input {
        padding-right: 0 !important;
      }
    `}
  /* &&& { */
  .inner-input {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    &:focus,
    &:focus-within,
    &:focus-visible {
      /* outline: 1px solid ${'#000' + opacityHex[20]}; */
    }
    height: 48px;
    padding: 0 10px;
    border: 1.5px solid ${APP_COLORS.gray300};
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    /* box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); */
    border-radius: 30px;
    color: ${p => p.theme.colors.neutral800};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    &:focus {
      outline: none;
    }
    ${({ $error }) =>
      $error &&
      css`
        border: 1px solid ${APP_COLORS.redErr};
      `}
    ${p =>
      p.inputType === 'default' &&
      css`
        border-radius: 10px;
      `}
    background: ${APP_COLORS.white};
    input {
      background: ${APP_COLORS.white};
      ${p =>
        p.$haveRightIcon &&
        css`
          padding-right: 3.4rem;
        `};
      height: 100%;
      width: 100%;
      border: none !important;
      box-shadow: none !important;
      outline: none !important;
    }
    /* Hidden arrows icon in number input */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }
    input:hover,
    input:focus {
      border: none !important;
      box-shadow: none !important;
      outline: none !important;
      ${p =>
        p.inputType === 'search' &&
        css`
          box-shadow: none;
        `}
    }
    input::placeholder {
      font-size: 1.6rem;
      color: ${p => p.placeholderColor ?? APP_COLORS.gray400};
    }

    &:where(.inner-input).r-input:focus {
      /* border-color: ${APP_COLORS.yellow200}; */
      /* border-inline-end-width: 1px; */
    }

    .prev-icon {
      margin-left: 0.8rem;
    }

    .suf-icon {
      position: absolute;
      right: 1.2rem;
    }

    .prefix {
      ${p =>
        p.$inputDefaultStyle === 'preTab'
          ? css`
              border-right: 1px solid ${APP_COLORS.gray300};
              height: 100%;
              padding: 0 10px;
              background: ${APP_COLORS.creamLight};
              display: flex;
              justify-content: center;
              align-items: center;
            `
          : css`
              color: ${APP_COLORS.fontLight};
              font-family: 'Hammersmith One', sans-serif;
              font-size: 1.6rem;
              font-style: normal;
              font-weight: 400;
              line-height: 1.8rem;
            `}
    }
    .suffix {
      margin-left: 4px;
      ${p =>
        p.$inputDefaultStyle === 'postTab'
          ? css`
              border-left: 1px solid ${APP_COLORS.gray300};
              height: 100%;
              padding: 0 10px;
              background: ${APP_COLORS.creamLight};
              display: flex;
              justify-content: center;
              align-items: center;
            `
          : css`
              color: ${APP_COLORS.fontLight};
              font-family: 'Hammersmith One', sans-serif;
              font-size: 1.6rem;
              font-style: normal;
              font-weight: 400;
              line-height: 1.8rem;
            `}
    }
    @media (max-width: ${BREAK_POINT.mobile}) {
      height: 40px;
      padding: 0px 10px;
    }
  }
  .h-48 {
    height: 50px;
    margin-top: 20px;
  }

  &:where(.inner-input)input:hover {
    /* border-color: ${APP_COLORS.yellow200}; */
    /* border-inline-end-width: 1px; */
  }

  .input-text-error {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: red;
    /* height: 19px; */
    font-size: 1.2rem;
    position: relative;

    /* top: -0.2rem; */
    @media (max-width: ${BREAK_POINT.mobile}) {
      font-size: 1.1rem;
    }
  }

  .search__input {
    background: #fff;
  }

  ${p =>
    p?.$noBorderStyle &&
    css`
      .input__label {
        font-weight: 500;
        font-size: 1.5rem;
      }
      .inner-input {
        border: none !important;
        outline: none !important;
        font-size: 1.4rem;
        font-weight: 500;
        height: 4.5rem;
        input {
          background: ${APP_COLORS.gray100};
          padding: 1rem 1.3rem;
          &::placeholder {
            color: ${p?.placeholderColor ?? APP_COLORS.neutral400};
          }
        }
        &:focus,
        &:focus-within,
        &:focus-visible {
          input {
            background: ${APP_COLORS.gray200};
          }
        }
      }
    `}
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      .inner-input,
      .r-input {
        background: ${APP_COLORS.gray300} !important;
        cursor: not-allowed !important;
      }
    `}
`;
