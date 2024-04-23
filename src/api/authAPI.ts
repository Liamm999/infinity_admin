import { ILogin, IRegister } from '@interfaces';
import { ApiClient } from './axiosInstance';
import { API_URL } from './config';
import { store } from '@redux';

export const authAPI = {
  login: (body: ILogin) => {
    const url = API_URL.AUTH.LOGIN;
    return ApiClient.post(url, body);
  },
  register: (body: IRegister) => {
    const url = API_URL.AUTH.REGISTER;
    return ApiClient.post(url, {
      fullName: body.fullName,
      username: body.username,
      password: body.password,
      confirmPassword: body.confirmPassword,
      email: body.email,
    });
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
      Authorization: `Bearer ${auth.verifyToken}`,
    };
    return ApiClient.put(url, body, { headers });
  },
  logout: (body?: any) => {
    const url = API_URL.AUTH.LOGOUT;
    return ApiClient.post(url, body);
  },
};
