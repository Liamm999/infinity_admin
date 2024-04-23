import axios, { type AxiosInstance } from 'axios';
import queryString from 'query-string';
import i18n from 'i18next';

import { LogApp, removeFormLS, showAppToast } from '@utils';
import { logout, store } from '@redux';
import { AUTH_USER, appLanguageEnum } from '@config';

let sessionExpiredToastShown = false;

export const axiosClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL ?? import.meta.env.VITE_API_URL,
    // timeout: 5000,
    headers: {
      Accept: 'application/json',
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      responseEncoding: 'utf8',
      responseType: 'json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*',
      'X-Application': 'web app',
      'X-Version': '1.0.1',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      client: 'customer',
    },
    paramsSerializer: params => queryString.stringify(params),
  });

  instance.interceptors.request.use(
    async function (config) {
      // const auth = store.getState()?.auth;
      // const storeToken = auth?.accessToken;
      // if (storeToken) {
      //   LogApp('interceptors token', storeToken);
      //   config.headers!.Authorization = `Bearer ${storeToken}`;
      // }
      return { ...config };
    },
    function (error) {
      // Do something with request error

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      if (response && response?.data) {
        return response.data;
      }
      return response;
    },
    function (error) {
      if (error?.response?.status === 401 && !sessionExpiredToastShown) {
        sessionExpiredToastShown = true;
        showAppToast(`${i18n.t('sessionExpired')}`, 'warning');
        store.dispatch(logout());
        removeFormLS(AUTH_USER);
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export const ApiClient = axiosClient();
