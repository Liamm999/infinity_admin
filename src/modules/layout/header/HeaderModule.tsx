import { Fragment, memo } from 'react';

import { Header } from '@components';
// import {
//   selectApp,
//   setSidebarCollapsed,
//   useAppDispatch,
//   useAppSelector
// } from '@redux';

export const HeaderModule = memo(() => {
  // const dispatch = useAppDispatch();

  // const { themeMode, showChangePasswordModal } = useAppSelector(selectApp);
  // const { sidebarCollapsed } = useAppSelector(selectApp);

  // const handleChangeCollapsed = (value: boolean) => {
  //   dispatch(setSidebarCollapsed(value));
  // };

  return (
    <Fragment>
      <Header
      // collapsed={sidebarCollapsed}
      // changeCollapsed={handleChangeCollapsed}
      />
    </Fragment>
  );
});

HeaderModule.displayName = 'HeaderModule';
