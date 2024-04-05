import { IMAGES } from '@assets';
import { AppTextBodyMedium } from '@components';
import { APP_COLORS } from '@themes';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { PATH_SALES_ACTIVITY, PATH_STS_EVENTS } from '@routes';
import { useTranslation } from 'react-i18next';

interface OptionProps {
  $active?: boolean;
}

export const SidebarModule = () => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <SidebarWrapper>
      <Logo
        src={IMAGES.logoImage}
        alt="Logo"
      />
      <Link to={PATH_STS_EVENTS}>
        <Option $active={location.pathname === PATH_STS_EVENTS}>
          <AppTextBodyMedium $color={APP_COLORS.white}>
            {t('stsEvents')}
          </AppTextBodyMedium>
        </Option>
      </Link>
      <Link to={PATH_SALES_ACTIVITY}>
        <Option $active={location.pathname === PATH_SALES_ACTIVITY}>
          <AppTextBodyMedium $color={APP_COLORS.white}>
            {t('salesActivity')}
          </AppTextBodyMedium>
        </Option>
      </Link>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 264px;
  height: 100%;
  z-index: 100;
  background-color: ${APP_COLORS.blueDarker};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  padding: 1.6rem 5.7rem;
`;

const Option = styled.div<OptionProps>`
  padding: 12px;
  padding-left: 48px;
  height: 54px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.1s, border-right 0.3s;

  &:hover {
    background-color: ${APP_COLORS.blueHover};
    border-right: 4px solid ${APP_COLORS.blueNormal};
  }

  background-color: ${p => p.$active && APP_COLORS.blueHover};
  border-right: ${p => p.$active && `4px solid ${APP_COLORS.blueNormal}`};
`;
