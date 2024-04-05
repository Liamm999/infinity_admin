export const API_URL = {
  AUTH: {
    FORGOT: '/openapi/client/v1/auth/forgot-password',
    CHANGE_PASSWORD: 'openapi/client/v1/auth/forgot/update-password',
    OTP_VALID: '/openapi/client/v1/auth/valid-code',
    LOGIN: '/openapi/client/v1/auth/login',
    LOGOUT: '/openapi/client/v1/auth/logout'
  },
  STS_EVENT: {
    GET_LIST_EVENT: '/openapi/client/v1/sts-event',
    GET_LIST_EVENT_SELECT: '/openapi/client/v1/sts-event/select',
    UPLOAD_FILE_VENUE_IMAGE: '/openapi/client/v1/sts-event/upload/venue-image',
    UPLOAD_FILE_SEAT_MAP: '/openapi/client/v1/sts-event/upload/seat-map-image',
    CREATE_EVENT: '/openapi/client/v1/sts-event',
    DELETE_EVENT: '/openapi/client/v1/sts-event',
    SEARCH_EVENT: '/openapi/client/v1/sts-event',
    DUPLICATE_EVENT: '/openapi/client/v1/sts-event/duplicate'
  },
  STS_CLASS: {
    GET_LIST_CLASS: '/openapi/client/v1/sts-event/class',
    GET_LIST_CLASS_SELECT: '/openapi/client/v1/sts-event/class/select',
    GET_LIST_EVENT: '/openapi/client/v1/sts-event',
    UPLOAD_FILE_IMAGE: '/openapi/client/v1/sts-event/class/upload/image'
  },
  SELECT: {
    GET_COUNTRY: '/openapi/client/v1/select/country',
    GET_CITY: '/openapi/client/v1/sts-event/city',
    GET_ALL_CITY: '/openapi/client/v1/select/city',
    GET_VENUE: '/openapi/client/v1/sts-event/venue',
    GET_ALL_VENUE: 'openapi/client/v1/select/venue',
    GET_SPORT: '/openapi/client/v1/select/sport',
    GET_LEAGUE: '/openapi/client/v1/select/league',
    GET_LEAGUE_SEASON: '/openapi/client/v1/select/league-season',
    GET_TEAM: '/openapi/client/v1/select/team'
  },
  SALE_ACTIVITY: {
    GET_LIST_SALE_ACTIVITY: '/openapi/client/v1/sts-event/class/sale',
    CREATE_SALE_ACTIVITY: '/openapi/client/v1/sts-event/class/sale',
    EXPORT_SALE_ACTIVITY: '/openapi/client/v1/sts-event/class/sale/download'
  }
};
