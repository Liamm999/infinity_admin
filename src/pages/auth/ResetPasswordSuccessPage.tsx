import { IMAGES } from '@assets';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';
import { BREAK_POINT } from '@config';
import { ResetPasswordSendEmail } from '.';

export const ResetPasswordSuccessPage = () => {
  return (
    <Wrap>
      <div className="logo">
        <img
          src={IMAGES.logoImage}
          alt="logo"
          className="logo-image"
        />
      </div>
      <ResetPasswordSendEmail />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.25rem;
  background-color: ${APP_COLORS.blueDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    margin-bottom: 5rem;
    @media (max-width: ${BREAK_POINT.desktop}) {
      margin-bottom: 0rem;
    }
    &-image {
      width: 22.4rem;
      height: auto;
    }
  }
`;
