import { CallsApi, CustomerApi } from '@api';
import { PATH_CALLS } from '@routes';
import { showAppToast } from '@utils';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function useExport() {
  const location = useLocation();

  const isCallsRoute = useMemo(
    () => location.pathname === PATH_CALLS,
    [location],
  );

  const onExport = async () => {
    let res: any;
    try {
      if (isCallsRoute) {
        res = await CallsApi.exportCalls();
      } else {
        res = await CustomerApi.exportCustomers();
      }

      if (res) {
        const blob = new Blob([res]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${isCallsRoute ? 'calls.xlsx' : 'customers.xlsx'}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      showAppToast(error);
    }
  };

  return {
    onExport,
  };
}

export default useExport;
