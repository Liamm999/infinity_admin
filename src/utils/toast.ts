import { toast } from 'react-toastify';

export const showAppToast = (
  text: any,
  type?: 'success' | 'error' | 'info' | 'warning' | 'default',
  themeMode?: 'colored' | 'light' | 'dark',
  toastId?: string
): void => {
  switch (type) {
    case 'success':
      toast.success(String(text), {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode ?? 'colored',
        toastId
      });
      break;
    case 'error':
      toast.error(String(text), {
        position: 'top-right',
        hideProgressBar: true,
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode ?? 'colored',
        toastId
      });
      break;
    case 'warning':
      toast.warning(String(text), {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode ?? 'colored',
        toastId
      });
      break;
    case 'info':
      toast.warning(String(text), {
        position: 'top-right',
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        theme: themeMode ?? 'colored',
        toastId
      });
      break;
    default:
      toast(String(text), {
        position: 'top-right',
        autoClose: 1500,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'colored',
        toastId
      });
      break;
  }
};
