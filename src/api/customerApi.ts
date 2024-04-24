import { ApiClient } from '@api/axiosInstance';
import { API_URL } from '@api/config';

export const CustomerApi = {
  getCustomerData: () => {
    const url = API_URL.CUSTOMER.DATA;
    return ApiClient.get(url);
  },
  searchData: (search: string) => {
    const url = `${API_URL.CUSTOMER.SEARCH}?phoneNumber=${search}`;
    return ApiClient.get(url);
  },
  filterData: (id: number) => {
    const url = `${API_URL.CUSTOMER.FILTER_CUSTOMER}?statusId=${id}`;
    return ApiClient.get(url);
  },
};
