import React from 'react';
import styled, { css } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import cn from 'classnames';

// import { APP_COLOR } from '@themes';
import { useLockBodyScroll } from '@hooks';
import { useTranslation } from 'react-i18next';
import { AppText } from '@components/styled';

const BACKDROP_Z_INDEX = 101;
const MODAL_Z_INDEX = 102;

interface IProps {
  onClose?: () => void;
  open?: boolean;
  children?: React.ReactNode;
  avoidClickOutside?: boolean;
  lockScroll?: boolean;
  title?: string;
  haveCloseIcon?: boolean;
  containerClassname?: string;
}

export const AppModal: React.FC<IProps> = props => {
  const { open } = props;

  return createPortal(
    <AnimatePresence>{open && <Modal {...props} />}</AnimatePresence>,
    document.body,
  );
};

const Modal: React.FC<Omit<IProps, 'open'>> = props => {
  const {
    onClose,
    children,
    avoidClickOutside = false,
    lockScroll = true,
    title,
    haveCloseIcon,
    containerClassname,
  } = props;
  const { t } = useTranslation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  lockScroll && useLockBodyScroll();

  return (
    <WrapperStyled
      className="app-modal-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween' }}
    >
      <div className={cn('app-modal-inner-container', containerClassname)}>
        {(title || haveCloseIcon) && (
          <div className="app-modal-header">
            <AppText className="!text-[24px] !text-gray-500 !font-light">
              {title ?? ''}
            </AppText>
            <button
              onClick={onClose}
              className="app-modal-close-btn !text-[24px]"
            >
              {haveCloseIcon && 'X'}
            </button>
          </div>
        )}
        {children}
      </div>
      <BackDropStyled
        $avoidClickOutside={avoidClickOutside}
        onClick={() => {
          !avoidClickOutside && onClose && onClose();
        }}
      />
    </WrapperStyled>
  );
};

const WrapperStyled = styled(motion.div)`
  & > .app-modal-inner-container {
    position: fixed;
    top: 50dvh;
    left: 50dvw;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: ${MODAL_Z_INDEX};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    & > .app-modal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 12px 24px;

      & > .app-modal-title {
        align-self: flex-start;
      }

      & > .app-modal-close-btn {
        all: unset;
        cursor: pointer;
        align-self: flex-end;
      }
    }
  }
`;

const BackDropStyled = styled.div<{ $avoidClickOutside: boolean }>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100dvh;
  min-width: 100dvw;
  z-index: ${BACKDROP_Z_INDEX};
  ${({ $avoidClickOutside }) =>
    !$avoidClickOutside &&
    css`
      cursor: pointer;
    `};
`;
