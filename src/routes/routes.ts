import { type IRoute } from '@interfaces';
import {
  NotFoundPage,
  HomePage,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  StsEventsPage,
  OTPPage,
  ResetPasswordSuccessPage,
  AddStsEventPage,
  RegisterPage,
} from '@pages';
import {
  PATH_404,
  PATH_LOGIN,
  PATH_FORGOT_PASSWORD,
  PATH_RESET_PASSWORD,
  PATH_HOME,
  PATH_STS_EVENTS,
  PATH_OTP,
  PATH_RESET_PASSWORD_SUCCESS,
  PATH_ADD_STS_EVENTS,
  PATH_EDIT_STS_EVENTS,
  PATH_REGISTER,
} from './navigation';
import { AppLayout, ErrorLayout, AuthLayout } from '@layouts';

export const routes: IRoute[] = [
  { path: PATH_HOME, page: HomePage, layout: AppLayout },
  { path: PATH_STS_EVENTS, page: StsEventsPage, layout: AppLayout },
  { path: PATH_ADD_STS_EVENTS, page: AddStsEventPage, layout: AppLayout },
  {
    path: `${PATH_EDIT_STS_EVENTS}/:id`,
    page: AddStsEventPage,
    layout: AppLayout,
  },

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
  { path: PATH_OTP, page: OTPPage, auth: true },
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
