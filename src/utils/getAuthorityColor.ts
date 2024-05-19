import { EDataType, EUserAuthority } from '@config';

const userAuthority = {
  [String(EUserAuthority.ADMIN).toLowerCase()]: '#91CAF3',
  [String(EUserAuthority.EMPLOYEE).toLowerCase()]: '#ABF0A9',
  [String(EUserAuthority.LEAD).toLowerCase()]: '#FAFF07',
};

export function getAuthorityColor(status?: EDataType | string) {
  if (!status) return 'white';
  return userAuthority[String(status).toLowerCase()];
}
