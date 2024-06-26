export const API_URL = {
  AUTH: {
    FORGOT: '/forgot-password',
    CHANGE_PASSWORD: '/update-password',
    OTP_VALID: '/verify-code',
    RESET_PASSWORD: '/reset-password',
    REGISTER: '/register',
    LOGIN: '/login',
    LOGOUT: '/logout',
  },

  CALLS: {
    DATA: '/calls',
    SEARCH: '/searchCall',
    FILTER_CALL: '/filter-calls',
    EXPORT: '/calls/export/excel',
  },

  CUSTOMER: {
    DATA: '/customer-data',
    SEARCH: '/searchCall',
    FILTER_CUSTOMER: '/filter-customer-data',
    EXPORT: '/customer-data/download-excel',
  },

  USER_INFOR: {
    DATA: '/user-infor',
    UPDATE_STATUS: '/user-infor/:userId/status',
    UPDATE_AUTHORITY: '/user-infor/:userId/authority',
  },

  WAIT: {
    DATA: '/wait',
    ACCEPT_WAIT: '/wait/accept',
  },
};
