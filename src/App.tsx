import './global.scss';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { GlobalStyles } from '@themes';
import { AppSpin, AppToast } from '@components';
import { MainRouter } from '@modules';
import { useTheme } from 'styled-components';
import { ConfigProvider } from 'antd';
import { selectApp, useAppSelector } from '@redux';
import { HeaderButtonProvider, HeaderSearchProvider } from '@hooks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App: React.FC = () => {
  const theme = useTheme();
  const { loading } = useAppSelector(selectApp);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ConfigProvider
          theme={{
            token: {
              fontFamily: theme.fonts.Poppins,
              colorPrimary: theme.colors.lightBlue300,
              fontSize: 16,
              fontWeightStrong: 400,
              colorText: theme.colors.neutral900,
              // borderRadius: borderRadiusEnum.SMALL
            },
          }}
          renderEmpty={() => <></>}
        >
          <HeaderButtonProvider>
            <HeaderSearchProvider>
              <MainRouter />
            </HeaderSearchProvider>
          </HeaderButtonProvider>
        </ConfigProvider>{' '}
        <AppToast />
        <AppSpin spinning={loading} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};

export default App;
