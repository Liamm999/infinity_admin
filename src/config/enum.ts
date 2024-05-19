import { PATH_CALLS } from '@routes';

export enum appLanguageEnum {
  CHINESE = 'cn',
  ENGLISH = 'en',
}

export enum genderEnum {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Others',
}

export enum roleEnum {
  EMPLOYEE = 'employee',
  HR = 'hr',
  APPRAISER = 'appraiser',
  SUPER_ADMIN = 'super_admin',
}

export enum buttonStyleEnum {
  BASIC = 'basic',
  ROUNDED = 'rounded',
  ICON = 'icon',
}

export enum EDataType {
  HOT = 'Nóng',
  COLD = 'Lạnh',
}

export enum ERoute {
  CALLS = 'calls',
  CUSTOMERS = 'customers',
}

export enum EUserStatus {
  ACTIVE = 'Hoạt động',
  STOP = 'Dừng',
  BREAK = 'Tạm nghỉ',
}

export enum EUserAuthority {
  ADMIN = 'admin',
  LEAD = 'Lead',
  EMPLOYEE = 'Employee',
}
