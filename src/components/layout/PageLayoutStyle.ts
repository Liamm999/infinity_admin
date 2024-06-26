import styled, { css } from 'styled-components';
import { Row, Col } from 'antd';
import { APP_HEADER_HEIGHT } from '@config';

export const StyledPageLayout = styled.div<{
  $haveSidebar?: boolean;
}>`
  margin-top: ${APP_HEADER_HEIGHT};
  position: relative;
  height: auto;
  ${p =>
    p?.$haveSidebar &&
    css`
      // ipad mini
      @media (min-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
        .app-left_col,
        .app-breadcrumb {
          display: none;
        }
        .rg-sec {
          margin-top: 0;
        }
      }

      // ipad air
      @media (max-width: 1180px) and (min-height: 820px) and (orientation: landscape) {
        .app-left_col,
        .app-breadcrumb {
          display: none;
        }
        .rg-sec {
          margin-top: 0;
        }
      }
    `};
`;

export const StyledRow = styled(Row)`
  padding: 2.4rem 0;
  @media (min-width: 1200px) {
    flex-flow: row;
  }

  @media (min-width: 375px) and (max-width: 640px) and (orientation: portrait) {
    /* hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;
    scrollbar-width: none;

    /* hide scrollbar for chrome, safari and opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const StyledCol = styled(Col)<{
  $left?: boolean;
  $right?: boolean;
}>`
  position: relative;
  height: auto;
  ${p =>
    p?.$left &&
    css`
      padding-right: 4rem;
    `}
  ${p =>
    p.$right &&
    css`
      padding-left: 4rem;
    `}
`;
