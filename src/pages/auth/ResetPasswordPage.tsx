import styled from 'styled-components';
import { ResetPasswordModule } from '@modules';

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
