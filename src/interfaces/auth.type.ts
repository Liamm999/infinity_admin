export type ILogin = {
  username: string;
  password: string;
};

export type IRegister = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type IForgot = {
  email: string;
};

export type IResetPassword = {
  password: string;
  confirmPassword: string;
};

export interface ILoginFields {
  username?: string;
  email?: string;
  password: string;
}

export interface ISendMailForgotFields {
  email: string;
}

export interface IVerifyEmailFields {
  otp: string;
  hash: string;
}

export interface IResetPasswordFields {
  password: string;
  confirmPassword: string;
  hash: string;
}

export interface ILogoutFields {
  accessToken?: string;
}

export interface IChangePasswordFields {
  idToken: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginResFields {
  id: number;
  createdAt: number;
  updatedAt: number;
  username: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  forgotPasswordOtp: any;
  isForgotPassword: boolean;
  role: string;
  token: string;
}
export interface ColorTheme {
  color: string;
  font_size: number;
  logo: string;
}

export interface ICompany {
  id: number;
  name: string;
  announcements: string;
  customerUrl: string;
  isActiveTiers: boolean;
}

export interface IOwnerInfo {
  id: number;
  firstName: string | null;
  lastName: string | null;
  email: string;
}

export interface ILoginParams {
  token?: string;
}

export interface ILoginResponse {
  id: number;
  firebaseId: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  isValidated: boolean;
  imageUrl: string | null;
  token: {
    accessToken: string;
    refreshToken: string;
  };
}
