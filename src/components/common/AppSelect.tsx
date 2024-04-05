import { APP_COLORS } from '@themes';
import { Select } from 'antd';
import { OptionProps } from 'antd/es/select';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const { Option } = Select;

interface IOption {
  options?: Array<{ value?: string | boolean | number; label?: string }>;
  onChange?: (value: string) => void;
  value?: any;
  label?: string;
  required?: string;
  placeholder?: string;
  name?: string;
  error?: string;
  disable?: boolean;
  className?: string;
}

export const AppSelect = (props: IOption) => {
  const { t } = useTranslation();
  const {
    options,
    onChange,
    value,
    label,
    required,
    placeholder,
    error,
    disable,
    className
  } = props;

  const filterOption = (input: string, option?: OptionProps) =>
    (option?.children ?? '')
      .toString()
      .toLowerCase()
      .includes(input.toLowerCase());

  return (
    <StyledWrapSelect className={className ? className : ''}>
      {label && (
        <label
          className="input__cap-label"
          htmlFor={label}
        >
          {t(label)}
          {required && <span className="required"> *</span>}
        </label>
      )}
      <Select
        showSearch
        optionFilterProp="children"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disable}
        filterOption={filterOption}
      >
        {options?.length ? (
          options.map(option => (
            <Option
              key={option.value?.toString()}
              value={option.value}
            >
              {option.label}
            </Option>
          ))
        ) : (
          <Option
            value=""
            disabled
          >
            {'No options available'}
          </Option>
        )}
      </Select>
      {error && <span className="error">{t(String(error))}</span>}
    </StyledWrapSelect>
  );
};

const StyledWrapSelect = styled.div`
  .ant-select-selector {
    border-radius: 0.8rem;
    border-color: #d9d9d9;
    height: 4.8rem !important;
    display: flex;
    align-items: center;
    padding: 1.4rem 1.6rem !important;
    border-color: ${APP_COLORS.stroke} !important;
    &:hover {
      border-color: ${APP_COLORS.blueNormal} !important;
    }
  }
  .ant-picker-focused {
    border-color: ${APP_COLORS.blueNormal};
  }
  .ant-select-single {
    height: 4.8rem;
  }
  .ant-select {
    width: 100%;
  }
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
  .input__cap-label {
    font-size: 1.6rem;
    font-weight: 500;
    &::first-letter {
      text-transform: capitalize;
    }
  }
  .error {
    font-size: 1.2rem;
    color: #d42a1c;
  }
`;
