import styled from 'styled-components';
import { AppButton, AppModal } from '.';
import { APP_COLORS } from '@themes';
import { AppH3 } from '@components';

interface IProps {
  onClose?: () => void;
  open?: boolean;
  children?: React.ReactNode;
  icon?: JSX.Element | JSX.Element[] | string;
  image?: string;
  onClickLeftButton?: () => void;
  onClickRightButton?: () => void;
  buttonLeft?: boolean;
  buttonRight?: boolean;
  textButtonLeft?: string;
  title?: string;
  description?: string;
  textButtonRight?: string;
}

export const ModalConfirm = (props: IProps) => {
  const {
    onClose,
    open,
    children,
    icon,
    onClickLeftButton,
    onClickRightButton,
    buttonLeft,
    buttonRight,
    image,
    textButtonLeft,
    title,
    description,
    textButtonRight
  } = props;
  return (
    <AppModal
      open={open}
      onClose={onClose}
    >
      <StyledWrapper>
        {!!icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
        {!!image && (
          <StyledImageWrapper
            src={image}
            alt="image"
          />
        )}
        <StyledTitleWrapper>
          {!!title && <AppH3>{title}</AppH3>}
          {!!description && <p className="description">{description}</p>}
        </StyledTitleWrapper>
        {!!children && <StyledBodyWrapper></StyledBodyWrapper>}
        {!!children && <StyledBodyWrapper>{children}</StyledBodyWrapper>}
        <StyledButtonWrapper>
          {buttonLeft && (
            <AppButton
              text={textButtonLeft}
              onClick={onClickLeftButton}
              className="left-button"
            />
          )}
          {buttonRight && (
            <AppButton
              text={textButtonRight}
              onClick={onClickRightButton}
              className="right-button"
              backgroundColor={APP_COLORS.white}
              textColor={APP_COLORS.blue500}
            />
          )}
        </StyledButtonWrapper>
      </StyledWrapper>
    </AppModal>
  );
};

const StyledWrapper = styled.div`
  padding: 40px;
  background-color: ${APP_COLORS.white};
  min-width: 60rem;
  border-radius: 16px;
  text-align: center;
`;
const StyledIconWrapper = styled.div``;
const StyledTitleWrapper = styled.div`
  text-align: center;
  margin-top: 32px;
  margin-bottom: 32px;
  .description {
    font-size: 16px;
    margin-top: 16px;
  }
`;
const StyledImageWrapper = styled.img`
  height: auto;
  width: auto;
`;
const StyledBodyWrapper = styled.div``;
const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  .left-button {
    font-size: 16px;
    font-weight: 600;
    width: 231px;
    color: ${APP_COLORS.white};
  }
  .right-button {
    font-size: 16px;
    font-weight: 600;
    width: 231px;
    border: 2px solid ${APP_COLORS.blue500};
  }
`;
