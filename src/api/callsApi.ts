import { ApiClient } from '@api/axiosInstance';
import { API_URL } from '@api/config';
import { ICall, ICreateCallRequest } from '@interfaces/calls.type';

export const CallsApi = {
  getCallsData: () => {
    const url = API_URL.CALLS.DATA;
    return ApiClient.get(url);
  },
  searchData: (search: string) => {
    const url = `${API_URL.CALLS.SEARCH}?phoneNumber=${search}`;
    return ApiClient.get(url);
  },
  filterData: (id: number) => {
    const url = `${API_URL.CALLS.FILTER_CALL}?statusId=${id}`;
    return ApiClient.get(url);
  },
  createCall: (body: ICreateCallRequest) => {
    const url = `${API_URL.CALLS.DATA}`;
    return ApiClient.post(url, body);
  },
  editCallById: (id: number, body: ICreateCallRequest) => {
    const url = `${API_URL.CALLS.DATA}/${id}`;
    return ApiClient.put(url, body);
  },
  deleteCallById: (id: number) => {
    const url = `${API_URL.CALLS.DATA}/${id}`;
    return ApiClient.delete(url);
  },
  exportCalls: () => {
    const url = `${API_URL.CALLS.EXPORT}`;
    return ApiClient.get(url);
  },
};
