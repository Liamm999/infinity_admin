export interface IOptions {
  label: any;
  value: any;
  [key: string]: any;
}

export interface ICon {
  width?: number | string;
  height?: number | string;
  size?: number | string;
  color?: string;
  background?: string;
  strokeWidth?: number;
  onClick?: () => void;
  className?: string;
  transform?: string;
  subColor?: string;
  subColor2?: string;
}

export interface IBreadcrumbItem {
  label: string;
  path: string;
}

export interface IHandleChange {
  (e: React.ChangeEvent<any>): void;
  <T = string | React.ChangeEvent<any>>(
    field: T
  ): T extends React.ChangeEvent<any>
    ? void
    : (e: string | React.ChangeEvent<any>) => void;
}

export interface IHandleBlur {
  (e: React.FocusEvent<any>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
}

export type IHandleSubmit = (
  e?: React.FormEvent<HTMLFormElement> | undefined
) => void;

export interface IHeadNav {
  title?: React.ReactNode;
  actionPath?: string;
  backIcon?: boolean;
  goBack?: boolean;
  isShow?: boolean;
}
export interface IBreadcrumbs {
  isBox?: boolean;
  data?: IBreadcrumbItem[];
  haveBack?: boolean;
  isFixed?: boolean;
  className?: string;
}

export interface IGetListPayload {
  page: number;
  limit: number;
  search?: string;
  enabled?: boolean;
}

export interface IAppUploadFile {
  page: number;
  limit: number;
  search?: string;
}

export interface IAppResponse<TData> {
  success: boolean;
  code: number;
  message?: string;
  data: TData;
}

export interface IToast {
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left' | 'center';
  open?: boolean;
  autoHideDuration: number;
  type?: 'error' | 'warning' | 'info' | 'success';
  message: string;
}
