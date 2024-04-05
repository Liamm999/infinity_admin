import { Fragment } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';

import { APP_COLORS, opacityHex } from '@themes';

interface IProps {
  size?: number;
  color?: string;
  borderSize?: number;
  children?: React.ReactNode;
  className?: string;
  spinning?: boolean;
}

export const AppSpin: React.FC<IProps> = props => {
  const {
    size = 24,
    borderSize = 3,
    color = APP_COLORS.blueDark,
    children,
    className,
    spinning = true
  } = props;

  if (children !== null)
    return (
      <Fragment>
        <AnimatePresence>
          {spinning && (
            <OverlayStyled
              className="overlay-loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'tween' }}
            >
              <div className="inner-overlay-loading">
                <SpinStyled
                  $size={size}
                  $color={color}
                  $borderSize={borderSize}
                  className={cn('app-spinner inner-loading', className)}
                />
              </div>
            </OverlayStyled>
          )}
        </AnimatePresence>
        {children}
      </Fragment>
    );

  return (
    <AnimatePresence>
      {spinning && (
        <SpinStyled
          $size={size}
          $color={color}
          $borderSize={borderSize}
          className={cn('app-spinner', className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'tween' }}
        />
      )}
    </AnimatePresence>
  );
};

const SpinStyled = styled(motion.div)<{
  $size: number;
  $color: string;
  $borderSize: number;
}>`
  display: inline-block;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border: ${props => props.$borderSize}px solid
    ${props => props.$color + opacityHex[30]};
  border-radius: 50%;
  border-top-color: ${props => props.$color};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
    }
  }
`;

const OverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  user-select: none;
  & > .inner-overlay-loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50dvh;
    left: 50dvw;
    transform: translate(50%, -50%);
    -webkit-transform: translate(50%, -50%);
    & > .inner-loading {
    }
  }
`;
