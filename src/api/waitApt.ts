import { ApiClient } from '@api/axiosInstance';
import { API_URL } from '@api/config';
import { ICall, ICreateCallRequest } from '@interfaces/calls.type';

export const WaitApi = {
  getWaitData: () => {
    const url = API_URL.WAIT.DATA;
    return ApiClient.get(url);
  },

  deleteWait: (id: string | number) => {
    const url = `${API_URL.WAIT.DATA}/${id}`;
    return ApiClient.delete(url);
  },

  acceptWait: (userId: string | number) => {
    const url = `${API_URL.WAIT.ACCEPT_WAIT}/${userId}`;
    return ApiClient.post(url);
  },
};
