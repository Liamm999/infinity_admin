import { IHandleChange } from '@interfaces';
import { APP_COLORS } from '@themes';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface IProps {
  onChange?: IHandleChange | any;
  value?: string | undefined | null | Date;
  label?: string;
  required?: boolean;
  placeholder?: string;
  name?: string;
  register?: UseFormRegister<any>;
  onBlur?: () => void;
  error?: any;
  showTime?: boolean;
}

const AppDatePicker = (props: IProps) => {
  const { t } = useTranslation();
  const {
    onChange,
    value,
    placeholder,
    label,
    required,
    name,
    error,
    register,
    showTime,
    ...restProps
  } = props;

  const dayjsValue = value ? dayjs(value) : undefined;

  return (
    <StyledWrapDate>
      {label && (
        <label
          className="input__cap-label"
          htmlFor={label}
        >
          {t(label)}
          {required && <span className="required"> *</span>}
        </label>
      )}
      <DatePicker
        name={name}
        onChange={onChange}
        value={dayjsValue}
        placeholder={placeholder}
        format={showTime ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD'}
        {...(name && register && register(name))}
        {...restProps}
        showTime={
          showTime && {
            showHour: true,
            showMinute: true,
            format: 'HH:mm',
          }
        }
        onBlur={props.onBlur}
      />
      {error && <span className="error">{t(String(error)) || ' '}</span>}
    </StyledWrapDate>
  );
};

export default AppDatePicker;

const StyledWrapDate = styled.div`
  .ant-picker {
    height: 4.8rem;
    padding: 1.4rem 1.6rem;
    border-color: ${APP_COLORS.stroke};
    border-radius: 0.8rem;
    &:hover {
      border-color: ${APP_COLORS.blueNormal};
    }
  }
  .ant-picker-focused {
    border-color: ${APP_COLORS.blueNormal};
  }
  label {
    display: block;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.neutral800};
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    .required {
      color: #d42a1c;
      font-weight: bold;
    }
  }
  .input__cap-label {
    font-size: 1.6rem;
    font-weight: 500;
    &::first-letter {
      text-transform: capitalize;
    }
  }
  .error {
    color: #d42a1c;
    font-size: 1.2rem;
  }
`;
