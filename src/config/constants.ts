export const APP_LANGUAGE = 'i18nextLng';

export const PREV_DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT = 'DD/MM/YY';
export const DATE_TIME_FORMAT = 'h:mm A, DD/MM/YYYY';
export const PREV_HOUR_FORMAT = 'HH-mm-ss';
export const HOUR_FORMAT = 'hh:mm A';

export const SIDEBAR_WIDTH = '316px';
export const SIDEBAR_COLLAPSED_WIDTH = '105px';
export const SIDEBAR_ICON_SIZE = '24px';
export const APP_HEADER_HEIGHT = '168px';
export const APP_MOBILE_HEADER_HEIGHT = '40px';
export const HEADER_PADDING_TOP = '20px';

export const MAT_SM_SCREEN_WIDTH = '1279px';
export const MAT_SM_SCREEN_WIDTH_MIN = '1280px';

export const AUTH_TOKEN = 'auth-token';
export const AUTH_USER = 'auth';

export const BREAK_POINT = {
  large_screen: '1400px',
  desktop: '1280px',
  tablet: '1024px',
  mobile: '576px',
};

export const emailValidationRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const strongPasswordValidationRegex =
  // eslint-disable-next-line no-useless-escape
  /^.*((?=.*[a-z]){1})((?=.*[A-Z]){1})((?=.*[!”#$%&'()*+,-./|:;<>=?@?\]\[^_`{}~\\]){1})((?=.*[0-9]){1}).*$/;
export const haveCharacterAndNumberPasswordValidationRegex =
  /^.*((?=.*[A-Za-z]){1})((?=.*[0-9]){1}).*$/;

// eslint-disable-next-line no-useless-escape
export const imageUrlRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
// eslint-disable-next-line no-useless-escape
export const uploadImageUrlRegex = /([http://][^"]*)/g;
export const numberRegex = /^\d+$/;
export const creditCardSpaceRegex =
  /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/;
export const onlyTextRegex = /^[A-Za-z]+$/;
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
