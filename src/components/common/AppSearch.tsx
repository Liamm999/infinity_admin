import { AppInput, SearchIcon } from '@components';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';

interface IOption {
  // options?: Array<{ value?: string; label?: string }>;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
}

export const AppSearch = (props: IOption) => {
  const { placeholder, onChange, value } = props;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <StyledWrapSelect>
      <div className="prefix-icon-wrapper">
        <SearchIcon />
      </div>
      <div className="search-input">
        <AppInput
          placeholder={placeholder}
          noBorderStyle
          className="input"
          onChange={handleInputChange}
          value={value}
        />
      </div>
    </StyledWrapSelect>
  );
};

const StyledWrapSelect = styled.div`
  position: relative;
  background-color: ${APP_COLORS.white};
  border-radius: 0.8rem;
  align-items: center;
  display: flex;
  .prefix-icon-wrapper {
    position: absolute;
    z-index: 1;
    width: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1.6rem;
  }
  .search-input {
    padding-left: 3rem;
    .inner-input {
      input {
        background: ${APP_COLORS.white};
      }
      &:focus,
      &:focus-within,
      &:focus-visible {
        input {
          background: ${APP_COLORS.white};
        }
      }
    }
  }
`;
