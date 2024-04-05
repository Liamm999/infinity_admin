import dayjs, { type Dayjs } from 'dayjs';
import cloneDeep from 'lodash/cloneDeep';
import omitBy from 'lodash/omitBy';

import { getFromLS } from './localStorage';
import { IMAGES } from '@/assets/images';
import {
  APP_LANGUAGE,
  DATE_FORMAT,
  HOUR_FORMAT,
  PREV_DATE_FORMAT,
  PREV_HOUR_FORMAT,
  genderEnum,
  uploadImageUrlRegex
} from '@config';

export const formatAppDate = (date?: string | Dayjs, endFormat?: string) => {
  if (!date) return '';
  if (typeof date !== 'string') return date.format(endFormat || DATE_FORMAT);
  return dayjs(date).format(endFormat || DATE_FORMAT) || '';
};

export const formatAppUpdateHour = (date?: string) => {
  if (!date) return '';
  return dayjs(date).hour() + 'h' + dayjs(date).minute();
};

export const formatPrevAppDate = (
  date?: string | Date,
  prevFormat?: string,
  endFormat?: string
) => {
  if (date)
    return dayjs(date, prevFormat || PREV_DATE_FORMAT).format(
      endFormat || DATE_FORMAT
    );
  return '---';
};

export const formatAppName = (firstName?: string, lastName?: string) => {
  if (lastName && firstName) {
    return firstName + ' ' + lastName;
  }
  if (!firstName) {
    if (lastName) return lastName;
  }
  return firstName;
};

export const formatAppGender = (value?: any) => {
  switch (value) {
    case genderEnum.MALE:
      return 'Male';
    case genderEnum.FEMALE:
      return 'Female';
    case genderEnum.OTHER:
      return 'Other';
    default:
      return '';
  }
};

export const formatAppAddress = (
  address?: string,
  flat?: string,
  floor?: string,
  buildingName?: string
) => {
  return `${flat ? `${flat}, ` : ''}${floor ? `${floor}, ` : ''}${
    buildingName ? `${buildingName}, ` : ''
  }${address || ''}`;
};

export const formatAppNumberValue = (
  value: string | number,
  unit: string,
  isEnglish: boolean,
  unitSuf?: 's' | 'es' // s or es
) => {
  if (Number(value) !== 1 && isEnglish) {
    return `${value} ${unit.concat(unitSuf || 's')}`;
  }
  return `${value || ''} ${unit}`;
};

export const formatAppHour = (
  hour?: string,
  prevFormat?: string,
  endFormat?: string
  // timezone?: string
) => {
  if (hour)
    return dayjs(hour, prevFormat || PREV_HOUR_FORMAT).format(
      endFormat || HOUR_FORMAT
    );
  return 'none';
};

export const formatSEDate = (date?: Date, endFormat?: string) => {
  if (date) return dayjs(date).format(endFormat || PREV_DATE_FORMAT);
  return '';
};

export function formatAppUnit(x: number | string, sign?: string) {
  if (!x) return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sign || ',');
}

export const formatAppCurrency = (
  val?: number,
  sDigits?: number,
  currency?: string
) => {
  if (!val) return 0;
  const value = Number(val) / 100;
  let digits = sDigits || 2;
  const abs = value < 0 ? -value : value;
  const sign = value < 0 ? '-' : '';
  const fixed = abs.toFixed(2);
  const round = Math.pow(10, digits);
  const prefix = currency || '';

  let rounded = Math.round(abs * round) / round;
  if (Number(fixed) !== Number(rounded)) {
    rounded = Number(fixed);
    digits = Math.max(digits, 2);
  }

  return `${sign}${prefix}${rounded
    .toFixed(digits)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '')}`;
};

export const formatAppFranceCurrency = (val?: number) => {
  if (!val) return 0;
  const num = String(Number(val) / 100);
  const value = parseFloat(num).toFixed(2);
  if (val % 100 === 0) return Number(value).toLocaleString('fr-FR') + ',00';
  return Number(value).toLocaleString('fr-FR');
};

export function cleanPayload(payload: any) {
  return omitBy(payload, (v: any) => {
    if (typeof v !== 'number' && !v) return true;
  });
}

export function formatAppRate(value: string | number) {
  return Math.round(Number(value) * 1e2) / 1e2;
}

export function capitalizeFirstLetter(value?: string) {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function capitalizeFirstLetterAfterDot(
  value?: string
): string | undefined {
  if (!value) return value;
  return value
    .trim()
    .split('. ')
    .map(sentence1 =>
      capitalizeFirstLetter(sentence1)
        ?.split('\n')
        ?.map(sentence2 => capitalizeFirstLetter(sentence2))
        ?.join('\n')
    )
    ?.join('. ');
}

// export function getAppTransText(value?: { en: string; fr: string }) {
// const app = store.getState()?.persistedReducer?.app
// const appLang = app?.language || getFromLS(APP_LANGUAGE)
// if (appLang === 'en') return value?.en
// return value?.fr
// }

export function getAppDynamicTransText(
  value: any,
  enKey: string,
  frKey: string
) {
  const language = getFromLS(APP_LANGUAGE);
  if (language === 'en') return value?.[enKey];
  return value?.[frKey];
}

export function getImageUrlByPosition(data: any, position: number) {
  const img = data?.find((item: any) => item?.imagePosition === position);
  return img?.pictureUrl || IMAGES.defaultImage;
}

export function appFormatImageUrl(url?: string) {
  if (!url || typeof url !== 'string') return undefined;
  if (url.match(uploadImageUrlRegex)) {
    return url;
  }
  // return IMAGES.errorPathImage
}

export const sortListById = <T extends { id: number }>(arr: T[]): T[] => {
  const sortArr: T[] = cloneDeep(arr);
  return sortArr.sort((x, y) => x.id - y.id);
};

export const appCCFormat = (value: any) => {
  if (!value) return '';
  const v = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .replace(/[^0-9]+/i, '')
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(' ') : value;
};

export const formatPrice = (price?: string | number): number => {
  if (!price) return 0;
  // return Number(price);
  return Math.round((Number(price) + Number.EPSILON) * 100) / 100;
};

export const appTimeSince = (date?: any, language?: string) => {
  if (!date) return;
  const now: any = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;

  if (language === 'en') {
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return '1 year ago';
      return Math.floor(interval) + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return '1 month ago';
      return Math.floor(interval) + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return '1 day ago';
      return Math.floor(interval) + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return '1 hour ago';
      return Math.floor(interval) + ' hours ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return '1 minute ago';
      return Math.floor(interval) + ' minutes ago';
    }
    return Math.floor(seconds) + ' seconds ago';
  } else {
    // handle fr lang
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return 'Il y a 1 an';
      return 'Il y a ' + Math.floor(interval) + ' ans';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return 'Il y a 1 mois';
      return 'Il y a ' + Math.floor(interval) + ' mois';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return 'Il y a 1 jour';
      return 'Il y a ' + Math.floor(interval) + ' jours';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return 'Il y a 1 heure';
      return 'Il y a ' + Math.floor(interval) + ' heures';
    }
    interval = seconds / 60;
    if (interval > 1) {
      if (Number(Math.floor(interval)) === 1) return 'Il y a 1 minute';
      return 'Il y a ' + Math.floor(interval) + ' minutes';
    }
    return 'Il y a ' + Math.floor(seconds) + ' secondes';
  }
};
