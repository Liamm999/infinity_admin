import { AppH3, AppText, AppTextBodyRegular } from '@components';
import { APP_COLORS } from '@themes';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const ForgotSendEmail = () => {
  const { t } = useTranslation();
  return (
    <StyledForgotSendEmail className="section">
      <div className="body">
        <AppH3 className="title">{t('forgotPassword')}</AppH3>
        <AppTextBodyRegular className="body-content">
          {t('sendEmailToResetInstruction')}
        </AppTextBodyRegular>
        <div className="support">
          <AppText
            $color={APP_COLORS.greenSupport}
            $fontWeight={400}
            $fontSize={16}
          >
            {t('thankYou')}
          </AppText>
        </div>
      </div>
    </StyledForgotSendEmail>
  );
};

const StyledForgotSendEmail = styled.div`
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
  }
`;
