import { IMAGES } from '@assets';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';
import { ResetPasswordModule } from '@modules';
import { BREAK_POINT } from '@config';

export const ResetPasswordPage = () => {
  return (
    <Wrap>
      <ResetPasswordModule />
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
