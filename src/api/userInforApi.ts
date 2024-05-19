import { ApiClient } from '@api/axiosInstance';
import { API_URL } from '@api/config';
import { ICall, ICreateCallRequest } from '@interfaces/calls.type';
import { IUserInfor } from '@interfaces/userInfor.type';

export const UserInforAPI = {
  getUserInforData: () => {
    const url = API_URL.USER_INFOR.DATA;
    return ApiClient.get(url);
  },

  updateUserInfor: (id: string | number, body: Partial<IUserInfor>) => {
    const url = `${API_URL.USER_INFOR.DATA}/${id}`;
    return ApiClient.put(url, body);
  },

  updateUserStatus: (id: string | number, status: string) => {
    const url = API_URL.USER_INFOR.UPDATE_STATUS.replace(':userId', String(id));
    return ApiClient.put(url, { status: status });
  },

  updateUserAuthority: (id: string | number, authority: string) => {
    const url = API_URL.USER_INFOR.UPDATE_AUTHORITY.replace(
      ':userId',
      String(id),
    );
    return ApiClient.put(url, { authority: authority });
  },

  deleteUserInforById: (id: string | number) => {
    const url = `${API_URL.USER_INFOR.DATA}/${id}`;
    return ApiClient.delete(url);
  },
};
