export const LogApp = (
  key: any,
  value?: any,
  ...optionalParams: any[]
): void => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    value ? console.log(key, value, ...optionalParams) : console.log(key);
  }
};
