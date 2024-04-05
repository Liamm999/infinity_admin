import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';
import { store, persistor } from '@redux';
import '@translations/i18n';
import { ThemeProvider } from 'styled-components';
import { StyledTheme } from '@themes';
import '@fontsource-variable/montserrat';
import './global.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ThemeProvider theme={StyledTheme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
