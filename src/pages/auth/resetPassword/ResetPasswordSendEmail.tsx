import { AppH3, AppText, AppTextBodyRegular } from '@components';
import { PATH_LOGIN } from '@routes';
import { APP_COLORS } from '@themes';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ResetPasswordSendEmail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleRedirectToLogin = () => {
    navigate(PATH_LOGIN);
  };
  return (
    <StyledResetPasswordSendEmail className="section">
      <div className="body">
        <AppH3 className="title">{t('resetPassword')}</AppH3>
        <AppTextBodyRegular className="body-content">
          {t('createANewPassword')}
        </AppTextBodyRegular>
        <div className="support">
          <AppText
            $color={APP_COLORS.greenSupport}
            $fontWeight={400}
            $fontSize={16}
          >
            {t('passwordHasBeenReset') + ' '}
          </AppText>
          <AppText
            $color={APP_COLORS.blueNormal}
            $fontWeight={600}
            $fontSize={16}
            className="click-able"
            onClick={handleRedirectToLogin}
          >
            {t('clickHere') + ' '}
          </AppText>
          <AppText
            $color={APP_COLORS.greenSupport}
            $fontWeight={400}
            $fontSize={16}
          >
            {t('toGoBackLogin')}
          </AppText>
        </div>
      </div>
    </StyledResetPasswordSendEmail>
  );
};

const StyledResetPasswordSendEmail = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 47.2rem;
  .body {
    width: 100%;
    display: flex;
    border-radius: 16px;
    padding: 2.4rem;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    gap: 24px;
    .app-input {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    .support {
      background-color: ${APP_COLORS.greenBgSupport};
      padding: 1.6rem;
      border-radius: 8px;
    }
    .support > p {
      display: inline; /* Nối liền hai thẻ p */
    }
  }
`;
