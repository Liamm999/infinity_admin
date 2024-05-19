import { EDataType, EUserStatus } from '@config';

const userStatus = {
  [String(EUserStatus.ACTIVE).toLowerCase()]: '#3DFF39',
  [String(EUserStatus.STOP).toLowerCase()]: '#FF3939',
  [String(EUserStatus.BREAK).toLowerCase()]: '#FAFF07',
};

export function getUserStatusColor(status?: EDataType | string) {
  if (!status) return 'white';
  return userStatus[String(status).toLowerCase()];
}
