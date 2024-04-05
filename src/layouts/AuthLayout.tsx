import styled from 'styled-components';

import { type ILayout } from '@interfaces';
import { APP_COLORS } from '@themes';

export const AuthLayout = (props: ILayout) => {
  const { children } = props;

  return (
    <StyledAuthLayout className="auth-layout">{children}</StyledAuthLayout>
  );
};

const StyledAuthLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${APP_COLORS.darkGreen};
`;
