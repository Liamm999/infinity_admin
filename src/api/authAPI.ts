import { ApiClient } from './axiosInstance';
import { API_URL } from './config';
import { store } from '@redux';

export const authAPI = {
  login: (body: any = {}) => {
    const url = API_URL.AUTH.LOGIN;
    return ApiClient.post(url, body);
  },
  signUp: (body?: any) => {
    const url = '/api/auth/sign-up';
    return ApiClient.post(url, body);
  },
  forgotPassword: (email?: any) => {
    const url = `${API_URL.AUTH.FORGOT}?email=${email}`;
    return ApiClient.get(url);
  },
  otpValid: (code?: any) => {
    const url = `${API_URL.AUTH.OTP_VALID}?code=${code}`;
    return ApiClient.get(url);
  },
  changePassword: (body?: any) => {
    const url = API_URL.AUTH.CHANGE_PASSWORD;
    const auth = store.getState()?.auth;
    const headers = {
      Authorization: `Bearer ${auth.verifyToken}`
    };
    return ApiClient.put(url, body, { headers });
  },
  logout: (body?: any) => {
    const url = API_URL.AUTH.LOGOUT;
    return ApiClient.post(url, body);
  }
};
