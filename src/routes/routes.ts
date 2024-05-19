import { type IRoute } from '@interfaces';
import {
  NotFoundPage,
  HomePage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ResetPasswordSuccessPage,
  RegisterPage,
  CallsPage,
  CustomersPage,
  UserInfoPage,
} from '@pages';
import {
  PATH_404,
  PATH_LOGIN,
  PATH_FORGOT_PASSWORD,
  PATH_RESET_PASSWORD,
  PATH_HOME,
  PATH_RESET_PASSWORD_SUCCESS,
  PATH_REGISTER,
  PATH_CALLS,
  PATH_CUSTOMERS,
  PATH_USER_INFOR,
} from './navigation';
import { AppLayout, ErrorLayout, AuthLayout } from '@layouts';

export const routes: IRoute[] = [
  { path: PATH_HOME, page: HomePage, layout: AppLayout },
  { path: PATH_CALLS, page: CallsPage, layout: AppLayout },
  { path: PATH_CUSTOMERS, page: CustomersPage, layout: AppLayout },
  { path: PATH_USER_INFOR, page: UserInfoPage, layout: AppLayout },

  // 404
  { path: PATH_404, page: NotFoundPage, layout: ErrorLayout },
  { page: NotFoundPage, layout: ErrorLayout },
];

export const authRoutes: IRoute[] = [
  // auth
  { path: PATH_LOGIN, page: LoginPage, auth: true, layout: AuthLayout },
  { path: PATH_REGISTER, page: RegisterPage, auth: true, layout: AuthLayout },
  {
    path: PATH_FORGOT_PASSWORD,
    page: ForgotPasswordPage,
    auth: true,
    layout: AuthLayout,
  },
  {
    path: PATH_RESET_PASSWORD,
    page: ResetPasswordPage,
    auth: true,
    layout: AuthLayout,
  },
  {
    path: PATH_RESET_PASSWORD_SUCCESS,
    page: ResetPasswordSuccessPage,
    auth: true,
  },
  { page: NotFoundPage, layout: ErrorLayout },
];

export const employeeRoutes: Array<IRoute> = [
  //
  { page: NotFoundPage, layout: ErrorLayout },
];

export const appraiserRoutes: Array<IRoute> = [
  //
  { page: NotFoundPage, layout: ErrorLayout },
];

export const hrRoutes: Array<IRoute> = [
  // { path: PATH_HR_DASHBOARD, page: HRDashboardPage, auth: true },
  { page: NotFoundPage, layout: ErrorLayout },
];

export const adminRoutes: Array<IRoute> = [
  // { path: PATH_ADMIN_DASHBOARD, page: AdminDashboardPage, auth: true },
  { page: NotFoundPage, layout: ErrorLayout },
];
