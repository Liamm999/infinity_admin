import { IMAGES } from '@assets';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';
import { OTPModule } from '@modules';

export const OTPPage = () => {
  return (
    <Wrap>
      <div className="logo">
        <img
          src={IMAGES.logoImage}
          alt="logo"
          className="logo-image"
        />
      </div>
      <OTPModule />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${APP_COLORS.blueDarker};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    margin-bottom: 5rem;
    &-image {
      width: 22.4rem;
      height: auto;
    }
  }
`;
