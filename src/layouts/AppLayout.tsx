import styled, { css } from 'styled-components';

import { HeaderModule, PageLayoutModule, SidebarModule } from '@modules';
import {
  selectApp,
  setAppLanguage,
  useAppDispatch,
  useAppSelector
} from '@redux';
import {
  APP_HEADER_HEIGHT,
  MAT_SM_SCREEN_WIDTH,
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH
} from '@config';
import { type ILayout } from '@interfaces';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const AppLayout = (props: ILayout) => {
  const { children } = props;
  const { sidebarCollapsed, language } = useAppSelector(selectApp);
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    dispatch(setAppLanguage(language ? language : 'en'));
  }, [language]);

  return (
    <StyledAppLayout className="main-layout">
      <HeaderModule />
      <div className="content-layout">
        <SidebarModule />
        <StyledPageInner sidebarCollapsed={sidebarCollapsed}>
          <PageLayoutModule {...props}>{children}</PageLayoutModule>
        </StyledPageInner>
      </div>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  min-height: 100vh;
  background-color: #eaf4ff;
`;

const StyledPageInner = styled.div<{
  sidebarCollapsed?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(p: any) => p?.theme.colors?.bgPage};
  height: auto;
  transition: all 0.3s;
  margin-left: ${p =>
    p.sidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH};
  padding: calc(${APP_HEADER_HEIGHT} + 3rem) 4.8rem;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  ${({ sidebarCollapsed }) =>
    sidebarCollapsed
      ? css`
          max-width: calc(100vw - ${SIDEBAR_COLLAPSED_WIDTH});
        `
      : css`
          max-width: calc(100vw - ${SIDEBAR_WIDTH});
        `}
  @media (max-width: ${MAT_SM_SCREEN_WIDTH}) {
    margin-left: ${SIDEBAR_COLLAPSED_WIDTH};
    max-width: calc(100vw - ${SIDEBAR_COLLAPSED_WIDTH});
  }
`;
