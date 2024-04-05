export const setToLS = (key: string, value: any): void => {
  if (typeof window === 'undefined') return;
  window?.localStorage?.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string): any => {
  if (typeof window === 'undefined') return;
  const value = window?.localStorage?.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  } else return null;
};

export const removeFormLS = (key: string): void => {
  if (typeof window === 'undefined') return;
  window?.localStorage?.setItem(key, '');
  window?.localStorage?.removeItem(key);
};

export const clearLS = (): void => {
  if (typeof window === 'undefined') return;
  window?.localStorage?.clear();
};
