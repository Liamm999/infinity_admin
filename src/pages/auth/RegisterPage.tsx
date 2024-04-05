import { RegisterModule } from '@modules';
import styled from 'styled-components';

export const RegisterPage = () => {
  return (
    <Wrap>
      <RegisterModule />;
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
