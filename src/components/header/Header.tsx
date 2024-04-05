import { Dropdown, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
  AppText,
  AppTextBodyMedium,
  ModalConfirm,
  UKFlagIcon,
  VNFlagIcon
} from '@components';
import { APP_COLORS } from '@themes';
import { authAPI } from '@api';
import { useNavigate } from 'react-router-dom';
import { PATH_LOGIN } from '@routes';
import { AUTH_USER } from '@config';
import { removeFormLS } from '@utils';
import {
  logout,
  selectApp,
  selectAuth,
  setAppLanguage,
  useAppDispatch,
  useAppSelector
} from '@redux';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IMAGES } from '@assets';

const LanguageDropdown = () => {
  const dispatch: any = useAppDispatch();
  const lang = useAppSelector(selectApp);
  const menu = (
    <StyledWrapLanguageDropDown>
      <Menu>
        <Menu.Item
          key="1"
          onClick={() => dispatch(setAppLanguage('en'))}
          className={lang.language === 'en' ? 'active' : ''}
        >
          English
        </Menu.Item>
        <Menu.Item
          key="2"
          onClick={() => dispatch(setAppLanguage('cn'))}
          className={lang.language === 'cn' ? 'active' : ''}
        >
          Vietnamese
        </Menu.Item>
      </Menu>
    </StyledWrapLanguageDropDown>
  );

  return (
    <Dropdown
      overlay={menu}
      placement="bottomRight"
      trigger={['click']}
    >
      <StyledWrapLanguage onClick={e => e.preventDefault()}>
        <div>{lang.language === 'en' && <UKFlagIcon />}</div>
        <div>{lang.language === 'cn' && <VNFlagIcon />}</div>
        <CaretDownOutlined className="custom-icon" />
      </StyledWrapLanguage>
    </Dropdown>
  );
};

const MenuDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const email = useAppSelector(selectAuth);
  const handleLogout = async () => {
    try {
      await authAPI.logout();
      removeFormLS(AUTH_USER);
      dispatch(logout());
      navigate(PATH_LOGIN);
      handleCloseModal();
    } catch (error) {}
  };
  function getFirstTwoChars(email: any) {
    return email?.substring(0, 2) || '';
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const menu = (
    <StyledMenuAccount>
      <Menu>
        <div className="wrap-name">
          <div className="user-name">
            <AppTextBodyMedium $color={APP_COLORS.white}>
              {getFirstTwoChars(email?.accountInfo?.email)}
            </AppTextBodyMedium>
          </div>
          <div className="user-email">
            <AppText
              $fontSize={14}
              $fontWeight={500}
              $color={APP_COLORS.neutral800}
            >
              {email?.accountInfo?.email}
            </AppText>
          </div>
        </div>

        {/* <Menu.Item key="1">
          <AppText
            $fontSize={14}
            $fontWeight={500}
            $color={APP_COLORS.neutral800}
          >
            Account Settings
          </AppText>
        </Menu.Item>
        <Menu.Item key="2">
          <AppText
            $fontSize={14}
            $fontWeight={500}
            $color={APP_COLORS.neutral800}
          >
            Help & Support
          </AppText>
        </Menu.Item> */}
        <Menu.Item
          key="3"
          onClick={handleOpenModal}
        >
          <AppText
            $fontSize={14}
            $fontWeight={500}
            $color={APP_COLORS.red800}
          >
            {t('logout')}
          </AppText>
        </Menu.Item>
      </Menu>
    </StyledMenuAccount>
  );

  return (
    <div>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={['click']}
      >
        <StyledWrapUser onClick={e => e.preventDefault()}>
          <div className="userName">
            <AppTextBodyMedium $color={APP_COLORS.white}>
              {getFirstTwoChars(email?.accountInfo?.email)}
            </AppTextBodyMedium>
          </div>
          <CaretDownOutlined className="custom-icon" />
        </StyledWrapUser>
      </Dropdown>
      <ModalConfirm
        open={isOpen}
        onClose={handleCloseModal}
        textButtonLeft={t('labels.confirmLogout')}
        textButtonRight={t('labels.no')}
        buttonLeft
        buttonRight
        image={IMAGES.logoutImage}
        title={`${t('logout')}?`}
        description={t('descriptionLogout')}
        onClickLeftButton={handleLogout}
        onClickRightButton={handleCloseModal}
      ></ModalConfirm>
    </div>
  );
};

export const Header = () => {
  return (
    <HeaderWrapper>
      <LanguageDropdown />
      {/* <BellIconWrapper>
        {noti ? <BellNotiIcon /> : <BellIcon />}
      </BellIconWrapper> */}
      <MenuDropdown />
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 48px;
  height: 64px;
  background-color: #fff;
`;

const StyledWrapUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .userName {
    background-color: ${APP_COLORS.blueDarker};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-transform: uppercase;
  }
  .custom-icon {
    font-size: 16px;
    margin-left: 5px;
  }
`;

const StyledWrapLanguage = styled.div`
  display: flex;
  justify-content: center; // useEffect(() => {
  //   setNoti(true);
  // }, []);
  align-items: center;
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;
  margin-right: 24px;

  .custom-icon {
    font-size: 16px;
    margin-left: 5px;
  }
`;

// const BellIconWrapper = styled.div`
//   margin-left: 24px;
//   margin-right: 24px;
//   cursor: pointer;

//   &:hover {
//     rect {
//       fill: ${APP_COLORS.blueBgLight};
//     }

//     path {
//       stroke: ${APP_COLORS.blueNormal};
//     }
//   }
// `;

const StyledMenuAccount = styled.div`
  .wrap-name {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid ${APP_COLORS.stroke};
    .user-name {
      background-color: ${APP_COLORS.blueDarker};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
      text-transform: uppercase;
    }
    .user-email {
      padding: 10px 0;
    }
  }
  li {
    padding: 8px 12px !important;
  }
  /* li:last-child {
    border-top: 1px solid ${APP_COLORS.stroke};
  } */
`;

const StyledWrapLanguageDropDown = styled.div`
  .active {
    background-color: ${APP_COLORS.stroke};
  }
`;
