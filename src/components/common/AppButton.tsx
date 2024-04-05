'use client';

import { CSSProperties, MouseEventHandler, ReactNode, useRef } from 'react';
import { debounce } from 'lodash';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { APP_COLORS } from '@themes';
import { BREAK_POINT, buttonStyleEnum } from '@config';

interface IButton {
  className?: string;
  disabled?: boolean;
  btnColor?: string;
  text?: string | JSX.Element | JSX.Element[] | null;
  prevIcon?: ReactNode;
  sufIcon?: ReactNode;
  style?: CSSProperties;
  children?: ReactNode;
  typeHtml?: 'button' | 'submit' | 'reset' | undefined;
  destructive?: boolean;
  textClassName?: string;
  value?: number;
  display?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  textColor?: string;
  btnStyle?: 'basic' | 'rounded' | 'pad' | 'full';
  onClick?: (action?: any) => void;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
}

export const AppButton = (props: IButton) => {
  const {
    className,
    children,
    style,
    text = '',
    prevIcon,
    sufIcon,
    textClassName,
    value,
    typeHtml,
    disabled,
    backgroundColor = APP_COLORS.cyan500,
    borderColor,
    borderWidth,
    btnStyle = 'rounded',
    textColor = APP_COLORS.white,
    onClick,
    onMouseEnter,
    onMouseLeave
  } = props;

  const { t } = useTranslation();

  const submitBtn = useRef<HTMLButtonElement>(null);
  const debouncedOnPress = (action: any) => {
    onClick && onClick(action);
  };

  const onPressAction = debounce(debouncedOnPress, 300, {
    leading: true,
    trailing: false
  });
  return (
    <StyledButton
      style={style}
      onClick={(action: any) => {
        if (!disabled) {
          onPressAction(action);
          submitBtn && submitBtn?.current?.click();
        }
      }}
      tabIndex={value}
      className={!className ? 'app-btn' : `app-btn ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      textColor={textColor}
      btnStyle={btnStyle}
    >
      {!!prevIcon && <div className="prev-icon">{prevIcon}</div>}
      {!!text &&
        (typeof text === 'string' ? (
          <span
            className={
              !textClassName ? `text-btn` : `text-btn ${textClassName}`
            }
            tabIndex={value}
          >
            {t(text)}
          </span>
        ) : (
          text
        ))}
      {!!sufIcon && <div className="suf-icon"> {sufIcon}</div>}
      {typeHtml === 'submit' && (
        <button
          ref={submitBtn}
          type={typeHtml}
          className="app-rf-btn"
        >
          Submit
        </button>
      )}
      {children}
    </StyledButton>
  );
};

export const StyledButton = styled.div<{
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  textColor?: string;
  btnStyle?: 'basic' | 'rounded' | 'pad' | 'full';
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
  height: ${p => (p.btnStyle ? 'fit-content' : '100%')};
  border-radius: ${p =>
    p.btnStyle === buttonStyleEnum.ROUNDED ? '40px' : '0.6rem'};
  &:hover {
    opacity: 0.76;
  }
  .app-rf-btn {
    display: none;
  }
  .text-btn {
    display: inline-block;
    font-family: 'Hammersmith One', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    vertical-align: middle;
    line-height: 22.4px;
    color: ${p => (p.btnStyle === buttonStyleEnum.ROUNDED ? '#fff' : '#000')};
    text-transform: capitalize;
  }
  .prev-icon {
    margin-right: 0.8rem;
  }
  ${p =>
    p?.btnStyle &&
    css`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.2rem 0;
      box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 3px;
      .text-btn {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        color: #fff;
      }
    `}

  ${p =>
    p?.btnStyle === 'pad' &&
    css`
      width: fit-content;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 1.4rem 1.6rem;
      .text-btn {
        font-style: normal;
        font-weight: 500;
        font-size: 100%;
        text-align: center;
        clear: both;
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
      }
      .suf-icon {
        margin-left: 4px;
      }
    `}
  ${p =>
    p?.btnStyle === 'full' &&
    css`
      .prev-icon {
        position: absolute;
        left: 5%;
        margin-top: auto;
        margin-bottom: auto;
      }
      .suf-icon {
        position: absolute;
        right: 5%;
        margin-top: auto;
        margin-bottom: auto;
      }
    `}
  ${p =>
    p?.btnStyle === 'rounded' &&
    css`
      height: 48px;
      /* width: fit-content; */
      padding: 0 30px;
      @media (max-width: ${BREAK_POINT.mobile}) {
        height: 40px;
        padding: 0 20px;
      }
    `}

  .text-btn {
    ${p => p.textColor && `color: ${p.textColor}`};
  }
  ${p =>
    p.borderColor &&
    `border: ${p?.borderWidth ? p?.borderWidth + 'px' : '2px'} solid ${
      p.borderColor
    }`};
  ${p => p.backgroundColor && `background: ${p.backgroundColor}`};
  ${p =>
    p.disabled &&
    css`
      opacity: 0.3 !important;
    `};
`;
