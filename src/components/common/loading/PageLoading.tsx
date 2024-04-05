import React from 'react';
import styled from 'styled-components';
import { AppSpin } from '.';

export const PageLoading: React.FC = () => {
  return (
    <PageStyled className="loading-page">
      <AppSpin
        borderSize={5}
        size={89}
      />
    </PageStyled>
  );
};

const PageStyled = styled.main`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
