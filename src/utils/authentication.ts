import intersection from 'lodash/intersection';

import { roleEnum } from '@config';

export const isAuthorized = (
  requiredRole: string | string[],
  userRoles: string | string[]
) => {
  if (typeof userRoles === 'string') {
    userRoles = [userRoles];
  }
  if (typeof requiredRole === 'string') {
    requiredRole = [requiredRole];
  }

  return intersection(requiredRole, userRoles).length > 0;
};

export const isEmployee = (roles: string | string[]) => {
  return isAuthorized([roleEnum.EMPLOYEE], roles);
};

export const isAppraiser = (roles: string | string[]) => {
  return isAuthorized([roleEnum.APPRAISER], roles);
};

export const isHR = (roles: string | string[]) => {
  return isAuthorized([roleEnum.HR], roles);
};

export const isSuperAdmin = (roles: string | string[]) => {
  return isAuthorized([roleEnum.SUPER_ADMIN], roles);
};
