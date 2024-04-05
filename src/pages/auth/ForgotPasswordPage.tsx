import { IMAGES } from '@assets';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';
import { ForgotModule } from '@modules';

export const ForgotPasswordPage = () => {
  return (
    <Wrap>
      <ForgotModule />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
